"use client";

import { useState } from "react";
import { FormField } from "@/components/molecules/FormField";
import { InquirySelector } from "@/components/molecules/InquirySelector";
import { Button } from "@/components/atoms/Button";
import styles from "./ContactForm.module.css";
import type { ContactFormData } from "@/types/components";

const INQUIRY_OPTIONS = [
  { value: "sales", label: "SALES" },
  { value: "press", label: "PRESS INQUIRIES" },
  { value: "partnership", label: "PARTNERSHIP" },
  { value: "careers", label: "CAREERS" },
];

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    inquiryType: "sales",
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInquirySelect = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      inquiryType: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>GET IN TOUCH</h1>
        <p className={styles.subtitle}>
          Let&apos;s explore how we can accelerate your digital transformation
          journey.
        </p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <InquirySelector
          options={INQUIRY_OPTIONS}
          selectedValue={formData.inquiryType}
          onSelect={handleInquirySelect}
          required
        />

        <div className={styles.formGrid}>
          <div className={styles.leftColumn}>
            <FormField
              label="First Name"
              name="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />

            <FormField
              label="Company Name"
              name="companyName"
              placeholder="Enter company name"
              value={formData.companyName}
              onChange={handleInputChange}
            />

            <FormField
              label="Message"
              type="textarea"
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
            />
          </div>

          <div className={styles.rightColumn}>
            <FormField
              label="Last Name"
              name="lastName"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />

            <FormField
              label="Email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className={styles.submitContainer}>
          <Button type="submit" className={styles.submitButton}>
            Submit
            <span className={styles.arrow}>→</span>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
