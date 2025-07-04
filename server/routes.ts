import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ 
          message: "All fields are required" 
        });
      }

      // Here you would typically:
      // 1. Send email using nodemailer or similar service
      // 2. Save to database if needed
      // 3. Send to external service like EmailJS
      
      // For now, just simulate success
      console.log("Contact form submission:", { name, email, subject, message });
      
      res.json({ 
        message: "Message sent successfully! I'll get back to you soon." 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        message: "Failed to send message. Please try again." 
      });
    }
  });

  // Resume download endpoint
  app.get("/api/resume", (req, res) => {
    try {
      const path = require('path');
      const fs = require('fs');
      
      // Path to the resume PDF in attached_assets
      const resumePath = path.join(process.cwd(), 'attached_assets', 'Lovepreet Singh_1751394092211.pdf');
      
      // Check if file exists
      if (!fs.existsSync(resumePath)) {
        return res.status(404).json({ message: "Resume not found" });
      }
      
      // Set headers for PDF download
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="Lovepreet_Singh_Resume.pdf"');
      
      // Stream the file
      const fileStream = fs.createReadStream(resumePath);
      fileStream.pipe(res);
      
    } catch (error) {
      console.error("Resume download error:", error);
      res.status(500).json({ message: "Failed to download resume" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
