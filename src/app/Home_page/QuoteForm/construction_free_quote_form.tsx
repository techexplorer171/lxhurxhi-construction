'use client';

import React, { useState, ChangeEvent, FormEvent, DragEvent } from 'react';
import {
  Building2,
  Calculator,
  Calendar,
  CheckCircle2,
  Clock,
  DollarSign,
  FileText,
  HardHat,
  MapPin,
  PhoneCall,
  Ruler,
  Upload,
  User,
  X
} from 'lucide-react';

// 1. Define Types
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  sqft: string;
  serviceType: string;
  propertyType: 'residential' | 'commercial';
  startDate: string;
  budgetRange: string;
  contactMethod: 'email' | 'phone' | 'text';
  notes: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  location?: string;
  sqft?: string;
  serviceType?: string;
}

const SERVICE_RATES: Record<string, number> = {
  'new-build': 180,
  'full-renovation': 110,
  'addition': 140,
  'interior': 75,
  'roofing-siding': 45,
  'commercial': 200,
};

export default function ConstructionFreeQuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    sqft: '',
    serviceType: 'new-build',
    propertyType: 'residential',
    startDate: '1-3-months',
    budgetRange: '25k-50k',
    contactMethod: 'email',
    notes: '',
  });

  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);

  // Calculate live estimate
  const calculateEstimate = (): { min: number; max: number } | null => {
    const sqftNum = parseFloat(formData.sqft);
    if (isNaN(sqftNum) || sqftNum <= 0) return null;

    const baseRate = SERVICE_RATES[formData.serviceType] || 100;
    const multiplier = formData.propertyType === 'commercial' ? 1.25 : 1.0;

    const baseCost = sqftNum * baseRate * multiplier;
    const min = Math.round(baseCost * 0.9);
    const max = Math.round(baseCost * 1.15);

    return { min, max };
  };

  const estimate = calculateEstimate();

  // Handlers with proper TypeScript types
  const handleInputChange = (
      e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      addFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      addFiles(Array.from(e.target.files));
    }
  };

  const addFiles = (newFiles: File[]) => {
    const validFiles = newFiles.filter((file) => file.size <= 10 * 1024 * 1024);
    setFiles((prev) => [...prev, ...validFiles]);
  };

  const removeFile = (indexToRemove: number) => {
    setFiles((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Project location or zip code is required';
    }

    if (!formData.sqft || isNaN(Number(formData.sqft)) || Number(formData.sqft) <= 0) {
      newErrors.sqft = 'Enter valid square footage';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccessModalOpen(true);
    }, 1200);
  };

  return (
      <div className="mx-auto max-w-4xl p-4 sm:p-6 lg:p-8">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl sm:p-10">

          {/* Header */}
          <div className="mb-8 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
              <HardHat className="h-4 w-4" /> Free No-Obligation Estimate
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Get Your Construction Quote
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Fill out the project details below to receive a personalized cost breakdown.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

              {/* Full Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3.5 h-5 w-5 text-gray-400" />
                  <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className={`w-full rounded-xl border bg-gray-50 py-3 pl-11 pr-4 text-sm text-gray-900 outline-none transition focus:bg-white focus:ring-2 ${
                          errors.fullName ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-amber-500 focus:ring-amber-200'
                      }`}
                  />
                </div>
                {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FileText className="absolute left-3.5 top-3.5 h-5 w-5 text-gray-400" />
                  <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className={`w-full rounded-xl border bg-gray-50 py-3 pl-11 pr-4 text-sm text-gray-900 outline-none transition focus:bg-white focus:ring-2 ${
                          errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-amber-500 focus:ring-amber-200'
                      }`}
                  />
                </div>
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <PhoneCall className="absolute left-3.5 top-3.5 h-5 w-5 text-gray-400" />
                  <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 000-0000"
                      className={`w-full rounded-xl border bg-gray-50 py-3 pl-11 pr-4 text-sm text-gray-900 outline-none transition focus:bg-white focus:ring-2 ${
                          errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-amber-500 focus:ring-amber-200'
                      }`}
                  />
                </div>
                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
              </div>

              {/* Location */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Project Zip Code / City <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-3.5 h-5 w-5 text-gray-400" />
                  <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="e.g. 90210 or Los Angeles"
                      className={`w-full rounded-xl border bg-gray-50 py-3 pl-11 pr-4 text-sm text-gray-900 outline-none transition focus:bg-white focus:ring-2 ${
                          errors.location ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-amber-500 focus:ring-amber-200'
                      }`}
                  />
                </div>
                {errors.location && <p className="mt-1 text-xs text-red-500">{errors.location}</p>}
              </div>

              {/* Service Type */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Service Required <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3.5 top-3.5 h-5 w-5 text-gray-400" />
                  <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm text-gray-900 outline-none transition focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-200"
                  >
                    <option value="new-build">New Construction</option>
                    <option value="full-renovation">Full Home Renovation</option>
                    <option value="addition">Home Extension / Addition</option>
                    <option value="interior">Interior Remodeling (Kitchen/Bath)</option>
                    <option value="roofing-siding">Roofing & Exterior</option>
                    <option value="commercial">Commercial Building</option>
                  </select>
                </div>
              </div>

              {/* Square Footage */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Total Square Footage <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Ruler className="absolute left-3.5 top-3.5 h-5 w-5 text-gray-400" />
                  <input
                      type="number"
                      name="sqft"
                      value={formData.sqft}
                      onChange={handleInputChange}
                      placeholder="e.g. 1500"
                      className={`w-full rounded-xl border bg-gray-50 py-3 pl-11 pr-4 text-sm text-gray-900 outline-none transition focus:bg-white focus:ring-2 ${
                          errors.sqft ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-amber-500 focus:ring-amber-200'
                      }`}
                  />
                </div>
                {errors.sqft && <p className="mt-1 text-xs text-red-500">{errors.sqft}</p>}
              </div>

              {/* Property Type */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">Property Type</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, propertyType: 'residential' }))}
                      className={`rounded-xl border py-3 text-sm font-semibold transition ${
                          formData.propertyType === 'residential'
                              ? 'border-amber-500 bg-amber-50 text-amber-900'
                              : 'border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100'
                      }`}
                  >
                    Residential
                  </button>
                  <button
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, propertyType: 'commercial' }))}
                      className={`rounded-xl border py-3 text-sm font-semibold transition ${
                          formData.propertyType === 'commercial'
                              ? 'border-amber-500 bg-amber-50 text-amber-900'
                              : 'border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100'
                      }`}
                  >
                    Commercial
                  </button>
                </div>
              </div>

              {/* Target Start Date */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">Desired Start Time</label>
                <div className="relative">
                  <Clock className="absolute left-3.5 top-3.5 h-5 w-5 text-gray-400" />
                  <select
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm text-gray-900 outline-none transition focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-200"
                  >
                    <option value="asap">ASAP / Within 1 Month</option>
                    <option value="1-3-months">1 to 3 Months</option>
                    <option value="3-6-months">3 to 6 Months</option>
                    <option value="planning">Just Planning / Gathering Quotes</option>
                  </select>
                </div>
              </div>

              {/* Estimated Budget */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">Estimated Budget Range</label>
                <div className="relative">
                  <DollarSign className="absolute left-3.5 top-3.5 h-5 w-5 text-gray-400" />
                  <select
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleInputChange}
                      className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm text-gray-900 outline-none transition focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-200"
                  >
                    <option value="under-25k">Under $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-250k">$100,000 - $250,000</option>
                    <option value="250k-plus">$250,000+</option>
                  </select>
                </div>
              </div>

              {/* Preferred Contact Method */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">Preferred Contact Method</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['email', 'phone', 'text'] as const).map((method) => (
                      <button
                          key={method}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, contactMethod: method }))}
                          className={`rounded-xl border py-2.5 text-xs font-semibold capitalize transition ${
                              formData.contactMethod === method
                                  ? 'border-amber-500 bg-amber-50 text-amber-900'
                                  : 'border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100'
                          }`}
                      >
                        {method}
                      </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Live Estimate Preview */}
            {estimate && (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Calculator className="h-5 w-5 text-emerald-600" />
                      <span className="text-sm font-semibold text-emerald-900">Live Estimated Cost Range</span>
                    </div>
                    <span className="text-xl font-bold text-emerald-700">
                  ${estimate.min.toLocaleString()} -${estimate.max.toLocaleString()}
                </span>
                  </div>
                  <p className="mt-1 text-xs text-emerald-600">
                    *Preliminary rough estimate based on average regional material and labor rates.
                  </p>
                </div>
            )}

            {/* File Upload Zone */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Attach Blueprints / Photos <span className="text-xs font-normal text-gray-400">(Optional)</span>
              </label>
              <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`relative flex flex-col items-center justify-center rounded-2xl border-2 border-dashed p-6 transition ${
                      isDragOver ? 'border-amber-500 bg-amber-50/50' : 'border-gray-200 bg-gray-50 hover:bg-gray-100/50'
                  }`}
              >
                <Upload className="mb-2 h-8 w-8 text-gray-400" />
                <p className="text-xs text-gray-600">
                  <span className="font-semibold text-amber-600">Click to upload</span> or drag and drop files here
                </p>
                <p className="mt-1 text-[11px] text-gray-400">PDF, PNG, JPG, or DWG up to 10MB</p>
                <input
                    type="file"
                    multiple
                    accept="image/*,.pdf,.dwg"
                    onChange={handleFileInput}
                    className="absolute inset-0 cursor-pointer opacity-0"
                />
              </div>

              {/* Uploaded File List */}
              {files.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {files.map((file, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-gray-100 p-2.5 text-xs text-gray-700">
                          <span className="truncate max-w-[250px] font-medium">{file.name}</span>
                          <button
                              type="button"
                              onClick={() => removeFile(idx)}
                              className="text-gray-400 hover:text-red-500"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                    ))}
                  </div>
              )}
            </div>

            {/* Project Details Textarea */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Project Description & Requirements
              </label>
              <textarea
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Tell us about specific materials, preferred styles, timeline constraints, or special features..."
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm text-gray-900 outline-none transition focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-200"
              />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-gray-900 py-4 font-bold text-white shadow-lg transition hover:bg-gray-800 active:scale-[0.99] disabled:opacity-50"
            >
              {isSubmitting ? 'Calculating Quote...' : 'Request Free Quote'}
            </button>
          </form>
        </div>

        {/* Confirmation Modal */}
        {isSuccessModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
              <div className="w-full max-w-md rounded-3xl bg-white p-6 text-center shadow-2xl">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Quote Request Received!</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Thank you, <span className="font-semibold">{formData.fullName}</span>. Our engineering team will review your specifications and send a detailed estimate to <span className="font-semibold">{formData.email}</span> within 24 hours.
                </p>
                <button
                    onClick={() => setIsSuccessModalOpen(false)}
                    className="mt-6 w-full rounded-xl bg-amber-500 py-3 font-semibold text-white transition hover:bg-amber-600"
                >
                  Close
                </button>
              </div>
            </div>
        )}
      </div>
  );
}