'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Send, Globe, ShieldCheck, MapPin, Zap, CheckCircle2 } from 'lucide-react';
import { sendEmail } from '@/app/actions/sendEmail'; // Adjust path if using /src

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [transmitStatus, setTransmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      
      // 1. Lock in the form reference BEFORE the async call
      const form = e.currentTarget;
      
      setIsSubmitting(true);
      setTransmitStatus('idle');

      // Use the captured reference
      const formData = new FormData(form);
      
      // Fire the secure Server Action
      const result = await sendEmail(formData);

      if (result.success) {
        setTransmitStatus('success');
        // 2. Safely call reset on the captured reference
        form.reset(); 
      } else {
        setTransmitStatus('error');
      }

      setIsSubmitting(false);
    };

  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent px-6 pt-32 pb-20">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 z-0 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          {/* Left Column: Tactical Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="border-primary/30 bg-primary/5 text-primary mb-6 px-4 py-1 font-mono text-[10px] tracking-[0.4em] uppercase"
            >
              Comms_Protocol // Inbound
            </Badge>
            <h1 className="text-foreground mb-6 text-5xl font-extrabold tracking-tighter sm:text-7xl">
              Establish <br />
              <span className="text-primary">Uplink</span>
            </h1>
            <p className="text-muted-foreground mb-12 max-w-md text-lg leading-relaxed">
              Initiate a direct channel for RaaS deployment pilots, academic collaboration, or
              strategic investment inquiries.
            </p>

            {/* Terminal Status Cards */}
            <div className="space-y-4">
              {/* Bunkyo-ku Node */}
              <div className="group hover:border-primary/30 flex items-start rounded-sm border border-white/5 bg-white/5 p-4 transition-colors">
                <Globe className="text-primary mt-1 mr-4 h-5 w-5" />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-foreground text-sm font-bold tracking-widest uppercase">
                      Command_Node // Bunkyo-ku
                    </h4>
                    <span className="bg-primary flex h-1.5 w-1.5 animate-pulse rounded-full" />
                  </div>
                  <p className="text-muted-foreground mt-1 font-mono text-xs">
                    LAT: 35.7075° N // LONG: 139.7525° E
                  </p>
                </div>
              </div>

              {/* Bay Area Node */}
              <div className="group hover:border-primary/30 flex items-start rounded-sm border border-white/5 bg-white/5 p-4 transition-colors">
                <MapPin className="text-muted-foreground group-hover:text-primary mt-1 mr-4 h-5 w-5 transition-colors" />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-foreground text-sm font-bold tracking-widest uppercase">
                      Deploy_Node // Bay Area
                    </h4>
                    <span className="text-muted-foreground rounded-sm border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[8px]">
                      STAGING
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-1 font-mono text-xs">
                    LAT: 37.7749° N // LONG: 122.4194° W
                  </p>
                </div>
              </div>

              {/* Encryption Status */}
              <div className="flex items-start rounded-sm border border-white/5 bg-white/5 p-4">
                <ShieldCheck className="text-foreground/70 mt-1 mr-4 h-5 w-5" />
                <div>
                  <h4 className="text-foreground text-sm font-bold tracking-widest uppercase">
                    Network_Security
                  </h4>
                  <p className="text-muted-foreground mt-1 font-mono text-xs">
                    End-to-End Secure Channel Active
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: The Transmission Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="from-primary/20 to-primary/5 relative rounded-sm bg-gradient-to-br via-transparent p-1"
          >
            <div className="bg-card rounded-sm border border-white/10 p-8 shadow-2xl md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-muted-foreground ml-1 font-mono text-[10px] tracking-widest uppercase">
                      Full_Name
                    </label>
                    <Input
                      name="name" // Added name attribute
                      placeholder="Kenichi Yamada"
                      className="focus-visible:ring-primary h-12 rounded-none border-white/10 bg-transparent"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-muted-foreground ml-1 font-mono text-[10px] tracking-widest uppercase">
                      Email_Address
                    </label>
                    <Input
                      name="email" // Added name attribute
                      type="email"
                      placeholder="query@arkhonsystems.com"
                      className="focus-visible:ring-primary h-12 rounded-none border-white/10 bg-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-muted-foreground ml-1 font-mono text-[10px] tracking-widest uppercase">
                    Organization
                  </label>
                  <Input
                    name="org" // Added name attribute
                    placeholder="University / Corporation / Fund"
                    className="focus-visible:ring-primary h-12 rounded-none border-white/10 bg-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-muted-foreground ml-1 font-mono text-[10px] tracking-widest uppercase">
                    Message_Payload
                  </label>
                  <Textarea
                    name="message" // Added name attribute
                    placeholder="Briefly describe your mission parameters..."
                    className="focus-visible:ring-primary min-h-[150px] resize-none rounded-none border-white/10 bg-transparent"
                    required
                  />
                </div>

                {transmitStatus === 'error' && (
                  <div className="border border-red-500/30 bg-red-500/10 p-3 text-center font-mono text-[10px] text-red-500 uppercase">
                    Transmission Failed. Check connection and retry.
                  </div>
                )}

                {transmitStatus === 'success' ? (
                  <div className="flex h-14 w-full items-center justify-center gap-3 border border-green-500/30 bg-green-500/10 font-mono text-sm font-bold tracking-widest text-green-500 uppercase">
                    <CheckCircle2 className="h-5 w-5" /> PAYLOAD DELIVERED
                  </div>
                ) : (
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 flex h-14 w-full items-center justify-center gap-3 rounded-none font-bold tracking-widest uppercase transition-all"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Zap className="h-4 w-4 animate-spin" /> TRANSMITTING...
                      </span>
                    ) : (
                      <>
                        TRANSMIT MESSAGE <Send className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                )}

                <p className="text-muted-foreground mt-4 text-center font-mono text-[9px] tracking-widest uppercase">
                  By transmitting, you agree to Arkhon secure comms protocols.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
