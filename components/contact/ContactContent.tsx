"use client"
import * as React from "react"
import { useState } from "react"
import { Container } from "@/components/ui/Container"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { FormField } from "@/components/ui/FormField"
import { useForm } from "react-hook-form"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedSection } from "@/components/ui/animations/AnimatedSection"

type FormData = {
  fullName: string
  business: string
  email: string
  phone: string
  helpTopic: string
  projectDetails: string
  preferredContact: string
  middleName?: string
}

export const ContactContent = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<FormData>()
  
  const [topicFocused, setTopicFocused] = useState(false)
  const [contactFocused, setContactFocused] = useState(false)

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data)
      })
      if (!res.ok) throw new Error("Submission failed")
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="w-full">
      <section className="pt-32 pb-24 bg-offwhite border-b border-border-subtle">
        <Container>
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
            
            {/* Left Column */}
            <div className="w-full lg:w-5/12 space-y-8">
              <AnimatedSection delay={0.2}>
                <SectionLabel className="block">LET'S BUILD</SectionLabel>
                <h1 className="text-[clamp(36px,5vw,56px)] font-extrabold text-navy leading-[1.05] tracking-tight mt-4 mb-6 break-normal">
                  LET'S BUILD WHAT YOUR BUSINESS NEEDS NEXT.
                </h1>
                <p className="text-[clamp(18px,3vw,20px)] text-text-muted leading-relaxed font-light mb-12 break-normal">
                  Have an idea, a business challenge, or an existing website that needs to move forward? Tell us what you're working on. We'll start with the problem, understand the opportunity, and figure out the right next step.
                </p>
                
                <div className="pt-8 border-t border-border-subtle">
                  <h3 className="font-extrabold text-navy text-xl">NO PRESSURE. <br/>JUST A CONVERSATION.</h3>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column - Form */}
            <div className="w-full lg:w-7/12">
              <AnimatedSection delay={0.4}>
                <div className="bg-white p-8 md:p-12 rounded border border-border-subtle shadow-sm relative overflow-hidden">
                  <AnimatePresence mode="wait">
                    {isSubmitSuccessful ? (
                      <motion.div 
                        key="success"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center py-20"
                      >
                        <div className="w-16 h-16 bg-electric/10 text-electric rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">✓</div>
                        <h3 className="text-2xl font-bold text-navy mb-4">Message Sent</h3>
                        <p className="text-text-muted">Thanks for reaching out. We'll review your details and get back to you within 1-2 business days.</p>
                      </motion.div>
                    ) : (
                      <motion.form 
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, y: -20 }}
                        onSubmit={handleSubmit(onSubmit)} 
                        className="space-y-6"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField 
                            label="Full Name" 
                            required 
                            {...register("fullName", { required: "Full name is required" })}
                            error={errors.fullName?.message}
                          />
                          <FormField 
                            label="Business/Organization" 
                            {...register("business")}
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField 
                            label="Email Address" 
                            type="email"
                            required 
                            {...register("email", { 
                              required: "Email is required",
                              pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email address" }
                            })}
                            error={errors.email?.message}
                          />
                          <FormField 
                            label="Phone Number" 
                            {...register("phone")}
                          />
                        </div>

                        <div className="flex flex-col space-y-1.5 w-full">
                          <label className={`text-sm font-bold transition-colors ${topicFocused ? 'text-electric' : 'text-text-primary'}`}>
                            What do you need help with? <span className="text-red-500">*</span>
                          </label>
                          <select 
                            className={`w-full border rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-electric focus:border-electric transition-all bg-white ${errors.helpTopic ? "border-red-500" : "border-border-subtle"}`}
                            {...register("helpTopic", { 
                              required: "Please select a topic",
                              onBlur: () => setTopicFocused(false) 
                            })}
                            onFocus={() => setTopicFocused(true)}
                          >
                            <option value="">Select an option</option>
                            <option value="New Website">New Website</option>
                            <option value="Website Redesign">Website Redesign</option>
                            <option value="Website Strategy">Website Strategy</option>
                            <option value="SEO/Search Growth">SEO/Search Growth</option>
                            <option value="Web Application">Web Application</option>
                            <option value="Conversion Optimization">Conversion Optimization</option>
                            <option value="Maintenance & Growth">Maintenance & Growth</option>
                            <option value="Something Else">Something Else</option>
                          </select>
                          {errors.helpTopic && <span className="text-xs text-red-500 font-medium">{errors.helpTopic.message}</span>}
                        </div>

                        <FormField 
                          label="Tell us about the project" 
                          isTextArea
                          {...register("projectDetails")}
                        />

                        <div className="flex flex-col space-y-1.5 w-full">
                          <label className={`text-sm font-bold transition-colors ${contactFocused ? 'text-electric' : 'text-text-primary'}`}>
                            Preferred contact method
                          </label>
                          <select 
                            className="w-full border border-border-subtle rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-electric focus:border-electric transition-all bg-white"
                            {...register("preferredContact", {
                              onBlur: () => setContactFocused(false)
                            })}
                            onFocus={() => setContactFocused(true)}
                          >
                            <option value="Email">Email</option>
                            <option value="Phone">Phone</option>
                            <option value="WhatsApp">WhatsApp</option>
                          </select>
                        </div>
                        
                        <input type="text" style={{display: "none"}} {...register("middleName")} />

                        <div className="pt-4">
                          <button 
                            type="submit" 
                            disabled={isSubmitting} 
                            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold transition-all duration-300 ease-out bg-[#2563EB] text-white hover:bg-[#1d4ed8] hover:-translate-y-0.5 group disabled:opacity-80 disabled:hover:translate-y-0"
                          >
                            {isSubmitting ? "Sending..." : "Book a Session →"}
                          </button>
                        </div>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </Container>
      </section>

      {/* Direct Channels */}
      <section className="py-24 bg-white border-b border-border-subtle">
        <Container>
          <AnimatedSection className="mb-12">
            <h2 className="text-3xl font-bold text-navy">Direct Channels</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="p-8 border border-border-subtle rounded hover:border-electric transition-colors duration-300 h-full">
                <h3 className="font-bold text-navy text-xl mb-4">Instagram</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-6">
                  Follow DEV-TEE and explore work, ideas, and perspectives.
                </p>
                <a href="#" className="font-bold text-electric text-sm hover:underline">@devtee.studio →</a>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="p-8 border border-border-subtle rounded hover:border-electric transition-colors duration-300 h-full">
                <h3 className="font-bold text-navy text-xl mb-4">Email</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-6">
                  For project enquiries, partnerships, or technical questions.
                </p>
                <a href="mailto:hello@dev-tee.com" className="font-bold text-electric text-sm hover:underline">hello@dev-tee.com →</a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="p-8 border border-border-subtle rounded hover:border-electric transition-colors duration-300 h-full">
                <h3 className="font-bold text-navy text-xl mb-4">WhatsApp / Phone</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-6">
                  For direct conversations and quick enquiries.
                </p>
                <a href="#" className="font-bold text-electric text-sm hover:underline">+44 (0) 7000 000 000 →</a>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Final Dark CTA */}
      <section className="py-32 md:py-48 bg-navy text-center relative overflow-hidden">
        <motion.div 
          animate={{ y: [0, -40] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] z-0" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy z-10" />

        <Container className="relative z-20">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-[clamp(32px,5vw,56px)] font-extrabold text-white mb-6 leading-[1.05] tracking-tight break-normal">
                GOOD WORK STARTS WITH A GOOD CONVERSATION.
              </h2>
              <p className="text-[clamp(18px,3vw,22px)] text-gray-400 mb-12 break-normal max-w-2xl mx-auto">
                Let's understand the problem before we build the solution.
              </p>
              
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold transition-all duration-300 ease-out bg-[#2563EB] text-white hover:bg-[#1d4ed8] hover:-translate-y-0.5 group rounded-sm">
                Book a Session →
              </button>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </div>
  )
}
