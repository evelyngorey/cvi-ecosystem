import React from "react";
import { CheckCircle, XCircle } from "lucide-react";

type ServicesTableProps = {
  services?: string;
  services_other?: string; // Holds additional "other" service descriptions
  services_bilingual?: string; // Holds multilingual service descriptions
  referral_services?: string;
  referral_services_other?: string; // Holds additional "other" referral descriptions
  referral_services_bilingual?: string; // Holds multilingual referral descriptions
};

// Define a dictionary of aliases for display
const serviceAliases: { [key: string]: string } = {
  cm: "Case management",
  couns: "Counseling",
  bhs: "Behavioral health services",
  emp: "Employment support",
  yd: "Youth development",
  ca: "Community activism/advocacy",
  fcl: "Financial counseling/literacy",
  fa: "Financial assistance",
  la: "Legal assistance",
  ctadv: "Court advocacy",
  med: "Mediation",
  mbn: "Meeting basic needs (food, clothing, school supplies, etc.)",
  hous: "Housing assistance",
  emhous: "Emergency housing & relocation assistance",
  transp: "Transportation assistance",
  childc: "Childcare assistance",
  ment: "Mentoring",
  vca: "Victim Compensation Assistance",
  edu: "Educational support",
  medc: "Medical care",
  reent: "Reentry services",
  imm: "Immigration support",
  biling: "Multilingual services",
  other: "Other",
};

export default function ServicesTable({
  services,
  services_other,
  services_bilingual,
  referral_services,
  referral_services_other,
  referral_services_bilingual,
}: ServicesTableProps) {
  // Convert comma-separated strings into arrays
  const serviceList = services ? services.split(",").map(s => s.trim()) : [];
  const referralList = referral_services ? referral_services.split(",").map(s => s.trim()) : [];

  // Ensure "Other" is always last
  const allServices = Object.keys(serviceAliases).sort((a, b) =>
    a === "other" ? 1 : b === "other" ? -1 : 0
  );

  console.log("Props:", { services, services_other, services_bilingual, referral_services, referral_services_other, referral_services_bilingual });

  return (
    <div className="services-table">
      <h4>Services Provided</h4>
      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Provides in house</th>
            <th>Refers out</th>
          </tr>
        </thead>
        <tbody>
          {allServices.map((service) => {
            let displayName = serviceAliases[service] || service;

            if (service === "biling") {
              return (
                <tr key={service}>
                  <td>{displayName}</td>
                  <td>
                    {serviceList.includes("biling") ? (
                      services_bilingual && services_bilingual.trim() !== ""
                        ? services_bilingual
                        : "No details provided"
                    ) : (
                      <XCircle color="red" size={16} />
                    )}
                  </td>
                  <td>
                    {referralList.includes("biling") ? (
                      referral_services_bilingual && referral_services_bilingual.trim() !== ""
                        ? referral_services_bilingual
                        : "No details provided"
                    ) : (
                      <XCircle color="red" size={16} />
                    )}
                  </td>
                </tr>
              );
            }

            if (service === "other") {
              return (
                <tr key={service}>
                  <td>{displayName}</td>
                  <td>
                    {serviceList.includes("other") ? (
                      services_other && services_other.trim() !== ""
                        ? services_other
                        : "No details provided"
                    ) : (
                      <XCircle color="red" size={16} />
                    )}
                  </td>
                  <td>
                    {referralList.includes("other") ? (
                      referral_services_other && referral_services_other.trim() !== ""
                        ? referral_services_other
                        : "No details provided"
                    ) : (
                      <XCircle color="red" size={16} />
                    )}
                  </td>
                </tr>
              );
            }

            return (
              <tr key={service}>
                <td>{displayName}</td>
                <td>{serviceList.includes(service) ? <CheckCircle color="green" size={16} /> : <XCircle color="red" size={16} />}</td>
                <td>{referralList.includes(service) ? <CheckCircle color="green" size={16} /> : <XCircle color="red" size={16} />}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
