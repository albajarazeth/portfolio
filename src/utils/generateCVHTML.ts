import { cvData } from './cvData';

export const generateCVHTML = (): string => {
  return `
    <div style="font-family: 'Helvetica', 'Arial', sans-serif; color: #1A1A2E; line-height: 1.6;">
      <!-- Page 1: Identity & Overview -->
      <div style="padding: 20mm; background: #F8F9FF; min-height: 257mm;">
        <div style="border-bottom: 2px solid #B794F6; padding-bottom: 20px; margin-bottom: 30px;">
          <h1 style="font-size: 48px; font-weight: bold; margin: 0 0 10px 0; letter-spacing: -1px;">${cvData.name}</h1>
          <p style="font-size: 16px; letter-spacing: 3px; text-transform: uppercase; margin: 0 0 15px 0; font-weight: bold;">${cvData.role}</p>
          <p style="font-size: 9px; color: #1A1A2E; opacity: 0.7; margin: 8px 0 0 0;">${cvData.contact}</p>
        </div>
        
        <div style="margin-bottom: 28px;">
          <h2 style="font-size: 22px; font-weight: bold; margin-bottom: 18px; padding-bottom: 8px; border-bottom: 1px solid #B794F6; opacity: 0.4; letter-spacing: -0.8px;">Professional Summary</h2>
          <p style="font-size: 11px; line-height: 1.8;">${cvData.summary}</p>
        </div>
        
        <div style="margin-bottom: 28px;">
          <h2 style="font-size: 22px; font-weight: bold; margin-bottom: 18px; padding-bottom: 8px; border-bottom: 1px solid #B794F6; opacity: 0.4; letter-spacing: -0.8px;">Core Technologies</h2>
          <div style="margin-top: 10px;">
            <p style="font-size: 10px; font-weight: bold; margin-bottom: 8px; color: #B794F6; letter-spacing: 0.5px;">FRONTEND</p>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              ${cvData.techStack.frontend.map(tech => `<span style="font-size: 9px; color: #1A1A2E; background: #FFFFFF; padding: 7px 14px; border-radius: 14px; border: 1.5px solid #B794F6; font-weight: bold;">${tech}</span>`).join('')}
            </div>
          </div>
          <div style="margin-top: 14px;">
            <p style="font-size: 10px; font-weight: bold; margin-bottom: 8px; color: #B794F6; letter-spacing: 0.5px;">BACKEND</p>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              ${cvData.techStack.backend.map(tech => `<span style="font-size: 9px; color: #1A1A2E; background: #FFFFFF; padding: 7px 14px; border-radius: 14px; border: 1.5px solid #B794F6; font-weight: bold;">${tech}</span>`).join('')}
            </div>
          </div>
          <div style="margin-top: 14px;">
            <p style="font-size: 10px; font-weight: bold; margin-bottom: 8px; color: #B794F6; letter-spacing: 0.5px;">TOOLS & PLATFORMS</p>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              ${cvData.techStack.other.map(tech => `<span style="font-size: 9px; color: #1A1A2E; background: #FFFFFF; padding: 7px 14px; border-radius: 14px; border: 1.5px solid #B794F6; font-weight: bold;">${tech}</span>`).join('')}
            </div>
          </div>
        </div>
        
        <div>
          <h2 style="font-size: 22px; font-weight: bold; margin-bottom: 18px; padding-bottom: 8px; border-bottom: 1px solid #B794F6; opacity: 0.4; letter-spacing: -0.8px;">Selected Highlights</h2>
          ${cvData.highlights.map(highlight => `<p style="font-size: 10px; line-height: 1.8; margin: 10px 0 8px 0;">• ${highlight}</p>`).join('')}
        </div>
      </div>
      
      <!-- Page 2: Professional Experience -->
      <div style="padding: 20mm; background: #FEF3F2; min-height: 257mm; page-break-before: always;">
        <h2 style="font-size: 22px; font-weight: bold; margin-bottom: 18px; padding-bottom: 8px; border-bottom: 1px solid #B794F6; opacity: 0.4; letter-spacing: -0.8px;">Professional Experience</h2>
        ${cvData.experiences.map((exp, index) => `
          <div style="margin-bottom: 24px;">
            <h3 style="font-size: 17px; font-weight: bold; margin-bottom: 5px; letter-spacing: -0.3px;">${exp.title}</h3>
            <p style="font-size: 14px; color: #B794F6; margin-bottom: 5px; font-weight: bold;">${exp.company}</p>
            <p style="font-size: 9px; color: #1A1A2E; opacity: 0.7; text-transform: uppercase; letter-spacing: 1.2px; margin-bottom: 10px;">${exp.stack}</p>
            ${exp.bullets.map(bullet => `<p style="font-size: 10px; line-height: 1.7; margin-bottom: 7px; padding-left: 10px;">• ${bullet}</p>`).join('')}
            ${index < cvData.experiences.length - 1 ? '<div style="height: 1px; background: #B794F6; opacity: 0.25; margin: 20px 0;"></div>' : ''}
          </div>
        `).join('')}
      </div>
      
      <!-- Page 3: Freelance Work -->
      <div style="padding: 20mm; background: #F5F3FF; min-height: 257mm; page-break-before: always;">
        <h2 style="font-size: 22px; font-weight: bold; margin-bottom: 18px; padding-bottom: 8px; border-bottom: 1px solid #B794F6; opacity: 0.4; letter-spacing: -0.8px;">Freelance & Independent Work</h2>
        ${cvData.freelanceWork.map((work, index) => `
          <div style="margin-bottom: 24px;">
            <h3 style="font-size: 17px; font-weight: bold; margin-bottom: 5px; letter-spacing: -0.3px;">${work.title}</h3>
            ${work.subtitle ? `<p style="font-size: 12px; color: #B794F6; margin-bottom: 4px; font-style: italic;">${work.subtitle}</p>` : ''}
            <p style="font-size: 9px; color: #1A1A2E; opacity: 0.7; text-transform: uppercase; letter-spacing: 1.2px; margin-bottom: 10px;">${work.stack}</p>
            ${work.bullets.map(bullet => `<p style="font-size: 10px; line-height: 1.7; margin-bottom: 7px; padding-left: 10px;">• ${bullet}</p>`).join('')}
            ${index < cvData.freelanceWork.length - 1 ? '<div style="height: 1px; background: #B794F6; opacity: 0.25; margin: 20px 0;"></div>' : ''}
          </div>
        `).join('')}
      </div>
      
      <!-- Page 4: Personal Projects -->
      <div style="padding: 20mm; background: #ECFDF5; min-height: 257mm; page-break-before: always;">
        <h2 style="font-size: 22px; font-weight: bold; margin-bottom: 18px; padding-bottom: 8px; border-bottom: 1px solid #B794F6; opacity: 0.4; letter-spacing: -0.8px;">Personal Projects</h2>
        ${cvData.projects.map((project, index) => `
          <div style="margin-bottom: 20px;">
            <h3 style="font-size: 14px; font-weight: bold; margin-bottom: 6px;">${project.title}</h3>
            <p style="font-size: 10px; line-height: 1.6; color: #1A1A2E; opacity: 0.8;">${project.description}</p>
            ${index < cvData.projects.length - 1 ? '<div style="height: 1px; background: #B794F6; opacity: 0.25; margin: 20px 0;"></div>' : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `;
};
