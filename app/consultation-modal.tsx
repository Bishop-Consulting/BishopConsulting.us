'use client';

import { FormEvent, useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

type ConsultationModalProps = {
  className?: string;
  label?: string;
  showArrow?: boolean;
};

const recipient = 'service@bishopconsulting.us';
const formEndpoint = `https://formsubmit.co/ajax/${recipient}`;

export default function ConsultationModal({ className, label = 'Book a Consultation', showArrow = false }: ConsultationModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  function openModal() {
    setStatus('idle');
    setIsOpen(true);
  }

  function closeModal() {
    setStatus('idle');
    setIsOpen(false);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const submitterEmail = formData.get('email');

    if (typeof submitterEmail === 'string') {
      formData.set('_replyto', submitterEmail);
    }

    setStatus('sending');

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error('Consultation request failed');
      }

      form.reset();
      setStatus('sent');
      window.setTimeout(() => {
        closeModal();
      }, 1600);
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      <button type="button" className={className} onClick={openModal}>
        {label}
        {showArrow ? <ArrowRight className="h-5 w-5" /> : null}
      </button>

      {isOpen ? (
        <div className="consultation-modal" role="dialog" aria-modal="true" aria-labelledby="consultation-title">
          <button className="consultation-backdrop" type="button" aria-label="Close consultation form" onClick={closeModal} />
          <div className="consultation-dialog">
            <button className="consultation-close" type="button" aria-label="Close consultation form" onClick={closeModal}>
              <X className="h-5 w-5" />
            </button>

            <div>
              <h2 id="consultation-title">Book a Consultation</h2>
              <p>Tell us what workflow is costing time. Your request will be sent directly to Bishop Consulting.</p>
            </div>

            <form className="consultation-form" onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="Bishop Consulting consultation request" />
              <input type="hidden" name="_template" value="table" />
              <label className="consultation-honey" aria-hidden="true">
                Leave this field empty
                <input name="_honey" type="text" tabIndex={-1} autoComplete="off" />
              </label>
              <label>
                Name
                <input name="name" type="text" required />
              </label>
              <label>
                Email
                <input name="email" type="email" required />
              </label>
              <label>
                Phone
                <input name="phone" type="tel" />
              </label>
              <label>
                Business
                <input name="business" type="text" />
              </label>
              <label>
                Industry
                <input name="industry" type="text" placeholder="Electrical, plumbing, real estate, operations..." />
              </label>
              <label>
                Preferred contact
                <select name="contactPreference" defaultValue="Email">
                  <option>Email</option>
                  <option>Phone</option>
                  <option>Either</option>
                </select>
              </label>
              <label className="consultation-wide">
                What can we help with?
                <textarea name="message" rows={4} required />
              </label>

              {status === 'sent' ? <p className="consultation-status success">Request sent. We will follow up soon.</p> : null}
              {status === 'error' ? <p className="consultation-status error">Something went wrong. Please try again or email service@bishopconsulting.us.</p> : null}

              <button className="consultation-submit" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Book Consultation'}
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
