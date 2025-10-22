import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-m365-demo',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatChipsModule],
  styles: [
    `
      .demo-container {
        padding: 2rem;
        max-width: 1200px;
        margin: 0 auto;
      }

      .hero-section {
        text-align: center;
        margin-bottom: 3rem;
      }

      .hero-title {
        font-size: 2.5rem;
        font-weight: 300;
        margin-bottom: 1rem;
        color: #0078d4;
      }

      .hero-subtitle {
        font-size: 1.2rem;
        color: rgba(0, 0, 0, 0.6);
        margin-bottom: 2rem;
      }

      .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-bottom: 3rem;
      }

      .feature-card {
        transition: transform 0.2s;
      }

      .feature-card:hover {
        transform: translateY(-4px);
      }

      .feature-icon {
        font-size: 48px;
        color: #0078d4;
        margin-bottom: 1rem;
      }

      .feature-title {
        font-size: 1.5rem;
        font-weight: 500;
        margin-bottom: 0.5rem;
      }

      .feature-description {
        color: rgba(0, 0, 0, 0.6);
        line-height: 1.6;
      }

      .integration-section {
        margin-top: 3rem;
      }

      .section-title {
        font-size: 2rem;
        font-weight: 400;
        margin-bottom: 1.5rem;
        text-align: center;
      }

      .integration-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
        margin-bottom: 2rem;
      }

      .action-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin-top: 2rem;
      }

      .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
        margin-top: 2rem;
      }

      .stat-card {
        text-align: center;
        padding: 1.5rem;
      }

      .stat-value {
        font-size: 2.5rem;
        font-weight: 300;
        color: #0078d4;
      }

      .stat-label {
        font-size: 1rem;
        color: rgba(0, 0, 0, 0.6);
        margin-top: 0.5rem;
      }
    `,
  ],
  template: `
    <div class="demo-container">
      <!-- Hero Section -->
      <div class="hero-section">
        <h1 class="hero-title">Microsoft 365 Integration Demo</h1>
        <p class="hero-subtitle">
          Seamlessly integrate your employee management system with Microsoft 365 services
        </p>
        <div class="action-buttons">
          <button mat-raised-button color="primary">
            <mat-icon>cloud_done</mat-icon>
            Connect to Microsoft 365
          </button>
          <button mat-raised-button>
            <mat-icon>info</mat-icon>
            Learn More
          </button>
        </div>
      </div>

      <!-- Features Grid -->
      <div class="features-grid">
        <mat-card class="feature-card">
          <mat-card-content>
            <mat-icon class="feature-icon">people</mat-icon>
            <div class="feature-title">Azure Active Directory</div>
            <div class="feature-description">
              Sync employee data with Azure AD for seamless authentication and user management across your organization.
            </div>
          </mat-card-content>
        </mat-card>

        <mat-card class="feature-card">
          <mat-card-content>
            <mat-icon class="feature-icon">mail</mat-icon>
            <div class="feature-title">Outlook Integration</div>
            <div class="feature-description">
              Automatically create Outlook contacts and manage employee email communications directly from the system.
            </div>
          </mat-card-content>
        </mat-card>

        <mat-card class="feature-card">
          <mat-card-content>
            <mat-icon class="feature-icon">groups</mat-icon>
            <div class="feature-title">Teams Collaboration</div>
            <div class="feature-description">
              Create Teams channels for departments, enable chat, and facilitate seamless team collaboration.
            </div>
          </mat-card-content>
        </mat-card>

        <mat-card class="feature-card">
          <mat-card-content>
            <mat-icon class="feature-icon">event</mat-icon>
            <div class="feature-title">Calendar Sync</div>
            <div class="feature-description">
              Synchronize employee schedules with Outlook Calendar for better meeting coordination and planning.
            </div>
          </mat-card-content>
        </mat-card>

        <mat-card class="feature-card">
          <mat-card-content>
            <mat-icon class="feature-icon">folder</mat-icon>
            <div class="feature-title">OneDrive Storage</div>
            <div class="feature-description">
              Store employee documents securely in OneDrive with automatic backup and version control.
            </div>
          </mat-card-content>
        </mat-card>

        <mat-card class="feature-card">
          <mat-card-content>
            <mat-icon class="feature-icon">bar_chart</mat-icon>
            <div class="feature-title">Power BI Reports</div>
            <div class="feature-description">
              Generate comprehensive analytics and visualizations of employee data using Power BI integration.
            </div>
          </mat-card-content>
        </mat-card>
      </div>

      <!-- Integration Section -->
      <div class="integration-section">
        <h2 class="section-title">Available Microsoft 365 Services</h2>
        <div class="integration-chips">
          <mat-chip-set>
            <mat-chip highlighted>
              <mat-icon>cloud</mat-icon>
              Azure AD
            </mat-chip>
            <mat-chip highlighted>
              <mat-icon>mail</mat-icon>
              Outlook
            </mat-chip>
            <mat-chip highlighted>
              <mat-icon>chat</mat-icon>
              Teams
            </mat-chip>
            <mat-chip highlighted>
              <mat-icon>folder</mat-icon>
              OneDrive
            </mat-chip>
            <mat-chip highlighted>
              <mat-icon>table_chart</mat-icon>
              Excel Online
            </mat-chip>
            <mat-chip highlighted>
              <mat-icon>insert_chart</mat-icon>
              Power BI
            </mat-chip>
            <mat-chip highlighted>
              <mat-icon>description</mat-icon>
              SharePoint
            </mat-chip>
            <mat-chip highlighted>
              <mat-icon>task</mat-icon>
              Planner
            </mat-chip>
          </mat-chip-set>
        </div>

        <!-- Stats Section -->
        <mat-card>
          <mat-card-header>
            <mat-card-title>Integration Benefits</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="stats-grid">
              <div class="stat-card">
                <div class="stat-value">95%</div>
                <div class="stat-label">Time Saved</div>
              </div>
              <div class="stat-card">
                <div class="stat-value">100%</div>
                <div class="stat-label">Data Sync</div>
              </div>
              <div class="stat-card">
                <div class="stat-value">24/7</div>
                <div class="stat-label">Availability</div>
              </div>
              <div class="stat-card">
                <div class="stat-value">∞</div>
                <div class="stat-label">Scalability</div>
              </div>
            </div>
          </mat-card-content>
        </mat-card>

        <!-- Getting Started -->
        <mat-card style="margin-top: 2rem;">
          <mat-card-header>
            <mat-card-title>Getting Started</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <ol style="line-height: 2; color: rgba(0, 0, 0, 0.7);">
              <li>Register your application in Azure AD</li>
              <li>Configure API permissions for Microsoft Graph</li>
              <li>Add Microsoft Authentication Library (MSAL) to your project</li>
              <li>Implement authentication flow in your application</li>
              <li>Start using Microsoft 365 APIs to sync and manage data</li>
            </ol>
            <div class="action-buttons">
              <button mat-raised-button color="accent">
                <mat-icon>play_arrow</mat-icon>
                Start Integration
              </button>
              <button mat-stroked-button>
                <mat-icon>menu_book</mat-icon>
                View Documentation
              </button>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
})
export class M365DemoComponent {}
