'use client';

import { FormEvent, useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

type ConsultationModalProps = {
  className?: string;
  label?: string;
  showArrow?: boolean;
};

const recipient = 'service@bishopconsulting.us';

export default function ConsultationModal({ className, label = 'Book a Consultation', showArrow = false }: ConsultationModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent('Bishop Consulting consultation request');
    const body = encodeURIComponent(
      [
        'New consultation request',
        '',
        `Name: ${formData.get('name') || ''}`,
        `Email: ${formData.get('email') || ''}`,
        `Phone: ${formData.get('phone') || ''}`,
        `Business: ${formData.get('business') || ''}`,
        `Industry: ${formData.get('industry') || ''}`,
        `Preferred contact: ${formData.get('contactPreference') || ''}`,
        '',
        'Workflow or pain point:',
        `${formData.get('message') || ''}`
      ].join('\n')
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    setIsOpen(false);
  }

  return (
    <>
      <button type="button" className={className} onClick={() => setIsOpen(true)}>
        {label}
        {showArrow ? <ArrowRight className="h-5 w-5" /> : null}
      </button>

      {isOpen ? (
        <div className="consultation-modal" role="dialog" aria-modal="true" aria-labelledby="consultation-title">
          <button className="consultation-backdrop" type="button" aria-label="Close consultation form" onClick={() => setIsOpen(false)} />
          <div className="consultation-dialog">
            <button className="consultation-close" type="button" aria-label="Close consultation form" onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </button>

            <div>
              <h2 id="consultation-title">Book a Consultation</h2>
              <p>Tell us what workflow is costing time. This static form opens an email draft addressed to Bishop Consulting.</p>
            </div>

            <form className="consultation-form" onSubmit={handleSubmit}>
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

              <button className="consultation-submit" type="submit">
                Book Consultation
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
