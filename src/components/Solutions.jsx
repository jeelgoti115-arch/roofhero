roofhero:

total 3 roles 
customer,admin,contractor:

customer add new request from service page 
admin receives request and assign contractors in same area of cunstomer 
after assign contractors start bidding 
customer selects one bid (the contractor whos bid accepted is notified with success notification & other with rejected notification)
the customer whos bid is accepted start working and complete working 


from customer login ?
admin login?
contractor login?


contractor sends request to admin 
admin accept or reject 
only after accept contractor can login 

















csms :

all 9
na 1
assigned 1
pending 1
in process 1
completed 1
awaiting qc 1
in qc 1
rfd 1 
delivered 1

role name as per data base

admin
technician
advisor
receptionist
guard
qc


vin: 
1HGCM82633A004352
JHMFA16586S012345
WAUZZZ8V6JA123456
5YJSA1E26HF123789
KMHCT4AE1HU456321
MA3EYD81S00987654
VF1RFB00365321478
WBAVB13586KX12345
JN1CV6AP7BM345678
SALWR2VF4FA987654

# CSMS Backend

Node.js + Express backend using SQLite (Sequelize).

Quick start:

1. cd backend
2. npm install
3. npm run dev

API endpoints:
- GET /api/services
- POST /api/services
- GET /api/users
- GET /api/appointments
- POST /api/appointments


CarService Website Project Report

Overview
-------
A full audit of the CarService website project, including frontend and backend architecture, data flow, key files, and how the application works.

- Technology stack: Node.js, Express, MongoDB, Mongoose, plain HTML/CSS/JavaScript
- Deployment: backend serves static frontend files and exposes REST APIs
- Primary use case: role-based car service management with vehicle lifecycle tracking, QC processing, and admin analytics

Backend Summary
---------------
Core backend files
- backend/server.js
  - Main Express server
  - Serves frontend static assets from ../frontend
  - Implements authentication middleware using session tokens
  - Defines all API endpoints for services, users, vehicles, contacts, appointments, and admin operations
  - Seeds initial admin users, sample data, and cleans legacy indexes on startup
- backend/package.json
  - Dependencies: express, mongoose, body-parser, cors, dotenv
  - Dev dependency: nodemon
  - Startup commands: npm start, npm run dev
- backend/models/index.js
  - Connects to MongoDB
  - Exports User, Service, Appointment, Vehicle, Contact, Session

Backend data storage
- MongoDB via Mongoose
- Session storage with TTL index on Session.expiresAt
- Legacy artifacts present:
  - backend/data/database.sqlite (unused by current code)
  - backend/README.md content is outdated/wrong about SQLite/Sequelize

Authentication flow
- POST /api/login
  - Validates email/password
  - Generates random session token
  - Stores token in Session collection with 7-day expiry
- GET /api/me
  - Returns current authenticated user
- POST /api/logout
  - Deletes session token
- authMiddleware
  - Requires x-session-token header or token query param
  - Validates session and attaches req.user

User management
- GET /api/users
  - Returns all users without password
- POST /api/users
  - Admin only
  - Creates a new user with required fields
- PUT /api/users/:id
  - Admin only
  - Updates user fields, prevents duplicate emails
- DELETE /api/users/:id
  - Admin only
  - Prevents self-deletion

Service management
- GET /api/services
- POST /api/services
  - Admin only
- DELETE /api/services/:id
  - Admin only

Contact management
- POST /api/contacts
- GET /api/contacts
- PUT /api/contacts/:id
- DELETE /api/contacts/:id

Appointment management
- POST /api/appointments
- GET /api/appointments
  - Populates userId and serviceId

Vehicles and workflow
- GET /api/vehicles
  - Authenticated route with role-based filters:
    - guard: vehicles created by the logged-in guard
    - advisor: vehicles assigned to advisor
    - technician: vehicles with jobs assigned to technician
    - qc: vehicles with QC-related statuses
    - admin / receptionist: all vehicles
- POST /api/vehicles
  - Only admin and guard
  - Creates a new vehicle entry with service metadata
- PUT /api/vehicles/:id
  - Updates vehicle fields and appends history records
- DELETE /api/vehicles/:id
  - Admin only

Migration and admin utilities
- POST /api/migrate-vehicles
  - One-time migration of legacy/localStorage vehicle data into MongoDB
- POST /api/admin/reset
  - Admin-only cleanup of Vehicle and Contact collections
- GET /api/data
  - Combined data endpoint returning users, usersByRole, vehicles, and contacts

Backend Models
--------------
backend/models/user.js
- Fields: name, email, password, role, status, phone, specialization
- Roles supported: customer, technician, advisor, receptionist, admin, qc, guard

backend/models/vehicle.js
- Core details: plate, owner, ownerEmail, mobileNumber, make, model, year, color
- Workflow fields: assignedAdvisor, serviceStatus, inspectionStatus, inspectionReport, serviceDescription
- jobs array with technician assignment fields
- jobsAssigned, qcStatus, qcNotes, qcPriority
- totalServiceTime, totalCost
- serviceStartTime, serviceCompletionTime, sentToQcTime
- status, createdBy, createdByUserId, history
- QC assignment fields: qcAssignedTo, qcAssignedToName, qcAssignedToEmail, qcAssignedToId

backend/models/service.js
- title, description

backend/models/contact.js
- name, email, phone, problemType, description, status, adminResponse

backend/models/appointment.js
- date, notes, userId, serviceId

backend/models/session.js
- userId, token, expiresAt

Frontend Summary
----------------
Primary frontend files
- frontend/js/app.js
  - Central application logic
  - Session management and auth helpers
  - API request wrapper
  - Role-based page rendering
  - Notification helper UI
  - Legacy session migration fallback
- Static pages:
  - frontend/index.html
  - frontend/logreg.html
  - frontend/about.html
  - frontend/contact.html
  - frontend/features.html
  - frontend/guard.html
  - frontend/receptionist.html
  - frontend/advisor.html
  - frontend/technician.html
  - frontend/qc.html
  - frontend/admin.html

Session handling
- Browser uses sessionStorage
- Keys: vs_session_token, vs_current_user
- Legacy support: vsms_session_token, vsms_current_user, vs_current
- apiCall() adds header x-session-token

Page rendering
- DOMContentLoaded initializes renderAuth(), renderIndex(), handlePending(), renderGuard(), renderReceptionist(), renderAdvisor(), renderTechnician(), renderQC(), renderAdmin()

Role-specific functionality
- Guard page: vehicle intake and pending vehicle list
- Receptionist page: assign advisor, mark ready for delivery
- Advisor page: view advisor-assigned vehicles, send vehicles to technician or QC
- Technician page: mark service complete
- QC page: approve QC and mark ready for delivery
- Admin page: analytics chart, contact message management, admin reset action

Admin analytics and chart logic
- frontend/admin.html contains Chart.js rendering logic
- Chart totals are computed from delivered vehicles
- Chart code uses computeVehicleTotals() to calculate service income

Key workflows
-------------
Login and authentication
1. User enters credentials in logreg.html
2. POST /api/login
3. Backend returns token and user object
4. Client stores token and user data in sessionStorage
5. Subsequent API calls use x-session-token

Vehicle lifecycle
1. Guard or admin creates vehicle via POST /api/vehicles
2. Receptionist/advisor/technician/QC update vehicle status through PUT /api/vehicles/:id
3. Vehicle data is retrieved via GET /api/vehicles with filters by role

Data synchronization
- Frontend loads /api/data for combined users, vehicles, and contacts
- Admin analytics and dashboards derive data from the combined dataset

Observations and notes
----------------------
- Current backend is MongoDB-based, not SQLite.
- backend/README.md is stale and should be updated.
- backend/data/database.sqlite exists but is not referenced in the current code.
- Frontend includes legacy session storage migration paths.
- Backend has explicit admin-only guards on user, service, and vehicle modifications.

Run instructions
----------------
From project root:
cd backend
npm install
npm run dev

Then open the frontend in a browser via http://localhost:3000/.

Recommended next steps
----------------------
- Update backend/README.md to match current MongoDB architecture
- Remove stale backend/data/database.sqlite if unused
- Confirm frontend/admin analytics chart logic against delivered vehicle totals
- Consolidate legacy session handling after verification





