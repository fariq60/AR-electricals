AR ELECTRICALS WEBSITE
======================

FILES
-----
index.html
styles.css
script.js
assets/ar-electricals-banner.png

HOW TO RUN
----------
1. Keep all files/folders together.
2. Open index.html in Chrome/Edge.
3. For hosting, upload the complete folder to Netlify, GitHub Pages, Hostinger, etc.

WHATSAPP ORDER SYSTEM
---------------------
Current WhatsApp number used:
+91 93136 30632

The separate Quick Order / Enquiry form has been removed.
Now product Order / Enquire buttons open WhatsApp directly with the selected product already included in the message.
The main WhatsApp buttons also open AR Electricals chat directly.

WHERE TO CHANGE WHATSAPP NUMBER
-------------------------------
Open script.js and change:
const WHATSAPP_NUMBER = "919313630632";

Also update the two direct WhatsApp links in index.html if the company number changes.

PRODUCTS
--------
Products are currently stored in the `products` array inside script.js.
This is intentionally structured so a future Firebase admin panel can replace the static product data.

BUSINESS DETAILS USED
---------------------
AR Electricals
Powering a Safer Tomorrow
Since 2001

Phone: 9313630632
Email: arelectrical.co@gamil.com
Address:
36, Udyog Kendra Extn-1,
Ecotech-3, Greater Noida,
Gautam Budh Nagar - 201 306 (U.P.)

GSTIN: 09AICPA5417B1ZX

Services shown:
- LT Panel Manufacturing
- AMF / APFC Panels
- Control & Distribution Panels
- Installation & Maintenance
- Customised Solutions

FUTURE ADMIN PANEL
------------------
The website is ready to be upgraded later with:
- Firebase Authentication
- Firestore product database
- Add / edit / delete products
- Product image upload using Firebase Storage
- Admin-only dashboard
- Website loading products automatically from Firebase


EMAIL ENQUIRY
-------------
Product cards and the product detail popup now support pre-filled email enquiries using the visitor's default email app.
Email address: arelectrical.co@gamil.com

PRODUCT PHOTOS
--------------
Product photos are stored in:
assets/products/

The product cards use object-fit: contain so square, landscape and portrait product photos are shown fully without unwanted cropping.


LATEST CONTENT UPDATE
---------------------
- IT Panel renamed to LT Panel.
- WhatsApp enquiry message changed to quotation request wording.
- Added complete product range list.
- Added company profile: Overview, Quality, Infrastructure, Panel Erection & Commissioning.
- Added CPRI approved manufacturer quality credential box.
- Added Our Clients section with the supplied client list.
