import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCheck, HiArrowRight, HiUpload } from 'react-icons/hi';
import Button from '../components/ui/Button';

const formSteps = ['Personal Info', 'Project Details', 'Review & Submit'];

const industries = ['Manufacturing', 'Aerospace', 'Defense', 'Medical', 'Energy', 'Commercial Equipment', 'Other'];
const productTypes = ['Metal Nameplates', 'Asset Tags', 'Barcode Labels', 'Equipment Labels', 'Control Panels', 'Engraved Components', 'Custom Project'];
const materials = ['Aluminum', 'Stainless Steel', 'Brass', 'Polyester', 'Polycarbonate', 'Titanium', 'Other'];

export default function RequestQuote() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '',
    industry: '', productType: '', material: '',
    quantity: '', message: '', file: null,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const updateField = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  const canProceed = () => {
    if (step === 0) return form.name && form.company && form.email && form.phone;
    if (step === 1) return form.industry && form.productType && form.material;
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-bg-dark">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-lg mx-auto p-12"
        >
          <div className="w-20 h-20 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center mx-auto mb-8">
            <HiCheck className="w-10 h-10 text-accent" />
          </div>
          <h1 className="text-4xl font-extrabold text-white mb-4">Quote Request Submitted!</h1>
          <p className="text-body text-lg leading-relaxed mb-8">
            Thank you for your inquiry. Our team will review your requirements and get back to you within 24 hours with a detailed quote.
          </p>
          <Button href="/" variant="primary">Return to Home</Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="relative py-32 overflow-hidden bg-bg-dark">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-bg-dark z-10" />
          <div className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80')" }} />
        </div>
        <div className="container-wide relative z-20 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-6 block">Get Started</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Request a<br /><span className="text-gradient">Quote</span>
            </h1>
            <p className="text-lg md:text-xl text-body leading-relaxed max-w-2xl mx-auto">
              Tell us about your project and our team will create a custom solution tailored to your exact specifications.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="container-wide max-w-3xl">
          <div className="flex items-center justify-center gap-4 mb-12">
            {formSteps.map((s, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  i <= step ? 'bg-accent text-primary' : 'bg-bg-dark text-body/40 border border-border'
                }`}>
                  {i < step ? <HiCheck className="w-4 h-4" /> : i + 1}
                </div>
                <span className={`text-sm hidden md:block ${i <= step ? 'text-white' : 'text-body/40'}`}>{s}</span>
                {i < formSteps.length - 1 && <div className={`w-12 h-px ${i < step ? 'bg-accent' : 'bg-border'}`} />}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.form
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {step === 0 && (
                <>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { label: 'Full Name', field: 'name', type: 'text' },
                      { label: 'Company Name', field: 'company', type: 'text' },
                      { label: 'Email Address', field: 'email', type: 'email' },
                      { label: 'Phone Number', field: 'phone', type: 'tel' },
                    ].map((input) => (
                      <div key={input.field}>
                        <label className="text-white text-sm font-semibold mb-2 block">{input.label}</label>
                        <input
                          type={input.type}
                          value={form[input.field]}
                          onChange={(e) => updateField(input.field, e.target.value)}
                          className="w-full px-4 py-3 bg-bg-dark border border-border rounded-xl text-white text-sm focus:outline-none focus:border-accent/50 transition-colors"
                          required
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}

              {step === 1 && (
                <>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { label: 'Industry', field: 'industry', options: industries },
                      { label: 'Product Type', field: 'productType', options: productTypes },
                      { label: 'Material', field: 'material', options: materials },
                      { label: 'Estimated Quantity', field: 'quantity', type: 'text' },
                    ].map((input) => (
                      <div key={input.field}>
                        <label className="text-white text-sm font-semibold mb-2 block">{input.label}</label>
                        {input.options ? (
                          <select
                            value={form[input.field]}
                            onChange={(e) => updateField(input.field, e.target.value)}
                            className="w-full px-4 py-3 bg-bg-dark border border-border rounded-xl text-white text-sm focus:outline-none focus:border-accent/50 transition-colors"
                            required
                          >
                            <option value="">Select {input.label}</option>
                            {input.options.map((opt) => (
                              <option key={opt} value={opt}>{opt}</option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type={input.type || 'text'}
                            value={form[input.field]}
                            onChange={(e) => updateField(input.field, e.target.value)}
                            className="w-full px-4 py-3 bg-bg-dark border border-border rounded-xl text-white text-sm focus:outline-none focus:border-accent/50 transition-colors"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="text-white text-sm font-semibold mb-2 block">Project Details</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => updateField('message', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 bg-bg-dark border border-border rounded-xl text-white text-sm focus:outline-none focus:border-accent/50 transition-colors resize-none"
                      placeholder="Describe your project requirements, specifications, and any special instructions..."
                    />
                  </div>
                  <div>
                    <label className="text-white text-sm font-semibold mb-2 block">Upload Specifications (Optional)</label>
                    <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-accent/50 transition-colors cursor-pointer">
                      <HiUpload className="w-8 h-8 text-body/40 mx-auto mb-3" />
                      <p className="text-body/60 text-sm">Drop files here or click to upload</p>
                      <p className="text-body/40 text-xs mt-1">PDF, DWG, DXF, PNG, JPG (max 10MB)</p>
                    </div>
                  </div>
                </>
              )}

              {step === 2 && (
                <div className="p-8 rounded-2xl bg-bg-dark border border-border">
                  <h3 className="text-xl font-bold text-white mb-6">Review Your Request</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {[
                      { label: 'Name', value: form.name },
                      { label: 'Company', value: form.company },
                      { label: 'Email', value: form.email },
                      { label: 'Phone', value: form.phone },
                      { label: 'Industry', value: form.industry },
                      { label: 'Product Type', value: form.productType },
                      { label: 'Material', value: form.material },
                      { label: 'Quantity', value: form.quantity },
                    ].map((item) => (
                      <div key={item.label}>
                        <span className="text-body/40 text-xs uppercase tracking-wider">{item.label}</span>
                        <p className="text-white text-sm font-semibold mt-1">{item.value || 'Not specified'}</p>
                      </div>
                    ))}
                  </div>
                  {form.message && (
                    <div className="mb-6">
                      <span className="text-body/40 text-xs uppercase tracking-wider">Message</span>
                      <p className="text-white text-sm mt-1">{form.message}</p>
                    </div>
                  )}
                </div>
              )}

              <div className="flex justify-between pt-4">
                {step > 0 ? (
                  <button type="button" onClick={() => setStep(step - 1)} className="text-body/60 hover:text-white text-sm font-semibold transition-colors">
                    ← Previous Step
                  </button>
                ) : <div />}
                {step < formSteps.length - 1 ? (
                  <button type="button" onClick={() => canProceed() && setStep(step + 1)}
                    className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${
                      canProceed() ? 'bg-accent text-primary hover:bg-white' : 'bg-border text-body/40 cursor-not-allowed'
                    }`}>
                    Next Step
                  </button>
                ) : (
                  <button type="submit" className="px-8 py-3 rounded-xl bg-accent text-primary text-sm font-bold hover:bg-white transition-all flex items-center gap-2">
                    Submit Quote Request <HiArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </motion.form>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
