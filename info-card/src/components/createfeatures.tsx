import Graphic from "@arcgis/core/Graphic";
import { useEffect, useState } from "react";
import { React } from "jimu-core";
import {
  Mail, Phone, Globe, MapPin, ListChecks, X, AlertTriangle,
  Check, GraduationCap, Shield, Printer
} from "lucide-react";
import ServicesTable from "./servicestable";

type CreateFeaturesProps = {
  features: Graphic[];
};


{/* Program Types */}
const programTypeLabels: { [key: string]: string } = {
  "hvip": "Hospital-Based Violence Intervention Program (HVIP)",
  "cureviolence": "Cure Violence Program",
  "cvi": "Community Violence Interruption/Street Outreach Program",
  "victimservices": "Victim Services Agency",
  "youthorg": "Youth-Focused Community Organization",
  "commborg": "Community-Based Organization",
  "gov": "Government Office",
  "univ": "University",
  "other": "Other"
};

{/* School Collaboration Types */}
const collabSchoolDescriptions: { [key: string]: string } = {
  y_program: "Has a designated school program",
  y_clearance: "Program staff have school clearances",
  y_informal: "Has an informal relationship with schools",
  n: "Does not collaborate with schools"
};

{/* Police Collaboration Types */}
const collabPoliceDescriptions: { [key: string]: string } = {
  y_formal: "Has a formal relationship with police (e.g., signed agreement)",
  y_informal: "Has an informal relationship with police (e.g., works with police sometimes)",
  n: "Does not collaborate with police"
};


export default function CreateFeatures({ features }: CreateFeaturesProps) {
  const firstFeature = features[0];
  const attrs = firstFeature?.attributes || {};

  useEffect(() => {
    const element = document.querySelector(".info-card");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [features]);

  return (
    <div className="info-card">
      {features.length > 0 ? (
        <>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "1rem"
            }}
          >
            {/* Left: name and type stacked */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h1 style={{ marginBottom: "0.5rem", color: "#ef2d56" }}>
                {attrs.program_name || "Program name"}
              </h1>
              <h2 style={{ marginTop: 0, marginBottom: 0, color: "#555", opacity: 0.8, fontSize: "1rem" }}>
                {attrs.program_type
                  ? attrs.program_type
                      .split(",")
                      .map((type) => programTypeLabels[type.trim()] || type)
                      .join(", ")
                  : "Program type"}
              </h2>
            </div>

            {/* Right: print icon */}
            <button
              onClick={() => window.print()}
              style={{
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "0.5rem",
                alignSelf: "flex-start"
              }}
              aria-label="Print"
            >
              <Printer size={20} color="#555" />
            </button>
          </div>


          {/* Address and Contact Info */}
          <div className="contact-info">
            {attrs.address && <p><MapPin size={16} /> {attrs.address}</p>}
            {attrs.add_addresses && <p><MapPin size={16} /> {attrs.add_addresses}</p>}
            {attrs.contact_email && <p><Mail size={16} /> {attrs.contact_email}</p>}
            {attrs.contact_phone && <p><Phone size={16} /> {attrs.contact_phone}</p>}
            {attrs.contact_website && (
              <p><Globe size={16} /> <a href={attrs.contact_website}target="_blank" rel="noreferrer">{attrs.contact_website}</a></p>
            )}
          </div>


          {/* Eligibility Section */}
          <div className="eligibility-card">
            <h3>Eligibility</h3>

            {attrs.eligibility_yn === "yes" ? (
              <>
                <div className="eligibility-header mb-2">
                  <AlertTriangle size={20} className="eligibility-icon yellow" />
                  <p className="mb-1">
                    <strong>This program only enrolls clients who meet certain eligibility requirements:</strong>
                  </p>
                </div>
                <div className="eligibility-criteria pl-5">
                  <ul className="list-disc leading-snug">
                    {attrs.eligibility_text && attrs.eligibility_text.split(';').map((item, index) => (
                      <li key={`crit-${index}`} className="mb-1">{item.trim()}</li>
                    ))}
                    {attrs.geog_eligibility_yn === "yes" && (
                      <li>
                        Residents of the following zip codes:
                        {attrs.zip_eligibility && (
                          <ul className="pl-5 mt-1 list-disc">
                            {attrs.zip_eligibility.split(',').map((zip, i) => (
                              <li key={`zip-${i}`}>{zip.trim()}</li>
                            ))}
                          </ul>
                        )}
                      </li>
                    )}
                  </ul>
                </div>
              </>
            ) : (
              <div className="eligibility-header">
                <Check size={20} className="eligibility-icon green" />
                <p><strong>This program does not have defined eligibility requirements — anyone can enroll.</strong></p>
              </div>
            )}


          <h3>Self-referrals</h3>
            {attrs.self_refer === "yes" ? (
              <div className="eligibility-header mt-4">
                <Check size={20} className="eligibility-icon green" />
                <p><strong>This program accepts self-referrals.</strong></p>
              </div>
            ) : attrs.self_refer === "no" ? (
              <div className="eligibility-header mt-4">
                <X size={20} className="eligibility-icon red" />
                <p><strong>This program does not accept self-referrals.</strong></p>
              </div>
            ) : null}


          <h3>Capacity</h3>
            {attrs.capacity === "n_capacity" && (
              <p><X size={20} className="eligibility-icon red" /> <b>None:</b> Cannot take any new clients in the next month</p>
            )}
            {attrs.capacity === "l_capacity" && (
              <p><AlertTriangle size={20} className="eligibility-icon yellow" /> <b>Limited:</b> Can take fewer than 10 new clients in the next month</p>
            )}
            {attrs.capacity === "h_capacity" && (
              <p><Check size={20} className="eligibility-icon green" /> <b>High:</b> Can take any eligible referral in the next month</p>
            )}
          </div>


          {/* Services Table */}
          <ServicesTable
            services={attrs.services}
            referral_services={attrs.referral_services}
            services_other={attrs.services_other}
            referral_services_other={attrs.referral_services_other}
            services_bilingual={attrs.services_bilingual}
            referral_services_bilingual={attrs.referral_services_bilingual}
          />


          {/* Collaborations Section */}
          <h3>Collaborations</h3>
          <div className="collaboration-grid">
            <div className="collab-box">
              <GraduationCap size={24} className="mx-auto mb-3 text-blue-600" />
              <div className="text-xl font-bold mb-1">Schools</div>
              <p className="text-sm">
                {(() => {
                  const val = attrs.collab_schools;

                  // If it's a stringified list, clean and split it
                  if (typeof val === "string" && val.startsWith("[") && val.endsWith("]")) {
                    // Remove brackets and quotes, then split by comma
                    const cleaned = val.replace(/[\[\]'"]/g, "").split(",").map(s => s.trim());
                    return cleaned
                      .map(key => collabSchoolDescriptions[key] || key)
                      .join(", ");
                  }

                  // If it's just a single string
                  return collabSchoolDescriptions[val] || "Not specified";
                })()}
              </p>
            </div>

            <div className="collab-box">
              <Shield size={24} className="mx-auto mb-3 text-gray-600" />
              <div className="text-lg font-bold mb-1">Police</div>
              <p className="text-sm">
                {collabPoliceDescriptions[attrs.collab_police] || "Not specified"}
              </p>
            </div>
          </div>


        {/* Comments Section */}
        {attrs.comments && !/^\s*(n\/a|na|null|none)?\s*$/i.test(attrs.comments) && (
          <div className="comments">
            <h3>Other information</h3>
            <p>{attrs.comments}</p>
          </div>
        )}

        </>
      ) : (
        <p>No features found.</p>
      )}
    </div>
  );
}