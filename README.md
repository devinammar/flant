# Flant

Flant is a botanical platform based on plant identification, where anyone can search for plants by name or image from any species and get information containing the common name, scientific name, family, genus, year identified, and plant image in a single card view. With a user-friendly interface, Flant is designed to simplify access to botanical information quickly and factually, while also serving as a real contribution to the SDGs, particularly in supporting biodiversity conservation and improving environmental literacy.

Click this to open the website :

[![Flant](https://img.shields.io/badge/Flant-Visit-green)](https://flant.vercel.app)

Or you can copy this link and paste it into your browser:

```
https://flant.vercel.app
```

## ✨ Features

This platform provides 2 features that users can utilize. Below is an explanation of both features and their functionalities.

### 1. Search by Name
This feature allows users to search for plant information by name. Users can type the plant name (common name or scientific name) in the search field, then press the search button or Enter. The system will display detailed information about the relevant plant, including common name, scientific name, family, genus, and the year it was identified.

### 2. Search by Image
This feature allows users to identify plants through photos. Users can upload a plant image by selecting a file from their device or by dragging and dropping the image into the designated area. Once the image is uploaded, the system will analyze it and display information about the identified plant, including common name, scientific name, family, genus, and the year it was identified.

## 🧩 Problem

- ### There are Hundreds of Thousands Plant Species in the World, Making Identification Difficult
  
  Current estimates put the total number of plant species at approximately 390,000, with thousands of new vascular plants still being discovered each year. With such a vast number of species and their wide range of physical variations, memorizing them one by one is simply not feasible. This is precisely why a platform that enables quick and reliable plant identification is essential. [National Library of Medicine](https://pmc.ncbi.nlm.nih.gov/articles/PMC11970369/)
  
- ### Plant Information Is Scattered Across Many Sources (Fragmented) and Difficult to Find Quickly
  
  Knowledge about plant species remains highly fragmented across multiple databases, each with its own significant gaps in information. Non-random gaps within a given database can intersect with gaps in other databases in unexpected ways, reducing the number of species about which we have a comprehensive understanding. This means that to look up information on a single plant, users often have to consult multiple sites at once. [BioRxiv](https://www.biorxiv.org/content/10.1101/2025.03.09.642182v1.full.pdf)
  
- ### Data Quality from Non-Experts Is Inconsistent
  
  Data collected in the field by non-experts (citizen scientists) is difficult to ensure in terms of accuracy and completeness, as it is gathered by individuals with varying levels of training and expertise. While the majority of non-expert data tends to be accurate in what was observed, it is often incomplete — non-experts detect less information than experts do. This underscores the need for a platform that provides validated data from trusted sources (such as the Trefle.io API and PlantNet.org API). [National Library of Medicine](https://pmc.ncbi.nlm.nih.gov/articles/PMC5567195/)
  
- ### The Need for Open Access to Scientific Data
  
  Open access to scientific literature and related data is a powerful mechanism for creating and validating knowledge, and for supporting the development of science as a public good. It is consistent with the Principle of Universality of Science, which requires freedom of communication for scientists, as well as equitable access to data, information, and other resources for research. Furthermore, the UNESCO Recommendation on Open Science affirms that open science furthers the right of everyone to share in scientific advancement and its benefits, as stated in Article 27.1 of the Universal Declaration of Human Rights. [UNESCO](https://www.unesco.org/en/open-science/about) [International Science Council](https://council.science/publications/open-access-to-scientific-data-and-literature-and-the-assessment-of-research-by-metrics/)

## 💡 Solution

- ### Providing an Integrated Botanical Database in a Single Platform
  
  Flant provides access to plant information by name (both common and scientific), integrated directly with the Trefle.io API, a free open-source botanical REST API serving as a global plant database with over one million species, covering scientific names, synonyms, taxonomic classifications, and images, with data aggregated from various international sources such as Plants of the World Online (POWO) and USDA Plants. With this approach, users no longer need to open dozens of different sites, all botanical information is available in one easily accessible platform. [Grokipedia](https://grokipedia.com/page/trefle)
  
- ### Fast and Accurate Image-Based Plant Identification
  
  Flant allows users to identify plants simply by uploading a photo, using the PlantNet.org API. PlantNet is a citizen science platform developed by a consortium of four French research institutes: CIRAD, Inria, IRD, and INRAE, along with the One Science Montpellier Foundation. Using the PlantNet API, the platform is capable of identifying nearly 60,000 plant species worldwide. [PlanetNet](https://docs.plantnet.org/en/introduction-to-plantnet/)
  
- ### Use of Scientifically Validated Data Sources
  
  To ensure the accuracy of information, Flant exclusively uses data from scientifically tested APIs. A study published in the journal AoB Plants by Hamlyn G. Jones (2020) concluded that automatic image recognition technology holds significant value for beginners and the general public in identifying plants, while also encouraging greater interest in botanical science. [National Library of Medicine](https://pmc.ncbi.nlm.nih.gov/articles/PMC7640754/)
  
- ### Open Access for Everyone
  
  Flant is designed as a free platform accessible to anyone (students, researchers, gardeners, and the general public alike). The Trefle Plant API provides free access to extensive botanical information, making it ideal for building educational applications, with no credit card required and easy integration for developers. This is fully in line with the open access principle in science, where scientific information should be accessible to all without barriers. [FreeAPIHub](https://freeapihub.com/apis/trefle-plants)

## 📋 Software Development Life Cycle (SDLC)

### Waterfall
![SDLC](https://github.com/devinammar/flant/blob/76260a99a071b34d792db270d95d54534fb0aedf/SDLC-Waterfall.png)
1. **Problem Identification and Requirements Analysis**

   At this stage, an analysis was conducted regarding the challenges users face in accessing plant information quickly and accurately. It was found that botanical information is scattered across numerous sources, the vast number of plant species makes identification difficult, and data quality from unofficial sources is often inconsistent. Based on this analysis, the system requirements were defined: a centralized, user-friendly plant search platform utilizing validated data sources.
  
3. **System Architecture and Design**

   At this stage, the UI/UX (Wireframe) was designed from scratch using Figma, including the selection of colors, typography, and the visual hierarchy to be applied to the website. The website logo was also designed using Adobe Photoshop to establish the visual identity of the Flant platform. In addition to the interface design, the overall architecture of the Flant system was also designed, including the data retrieval flow from the Trefle.io API and PlantNet.org API, backend data processing, and the mechanism for displaying search results to users in card format. Furthermore, the technologies used for both the frontend and backend for API handling were also determined.

  
3. **Implementation**

   The development process was carried out based on the previously established designs. The frontend was built using HTML, CSS, React.js, and Vite to ensure a responsive and user-friendly interface. Meanwhile, the backend was developed using Node.js and Express to handle requests to external APIs. API keys are stored on the backend for security purposes, and the data received from the APIs is forwarded to the frontend for user display.
  
4. **Testing**

   Comprehensive testing was conducted on all system functionalities to ensure they perform as expected. This testing phase covered the search-by-name feature, image-based plant identification, data accuracy within the search result cards, error handling for API timeouts or missing data, and cross-device responsiveness
  
5. **Deployment**

   Once the testing phase was completed, the website was published for general user access. The deployment process was managed through Vercel.

## 🛠️ Tech Stack

- ### HTML, CSS, ReactJS + Vite
- ### Node.js & Express.js
- ### API:
  **Trefle.io**
  
  **PlantNet.org**
- ### Figma
  [Wireframe](https://www.figma.com/design/25A2Nlm5MoPiVoktFTghRz/Flant?node-id=0-1&t=mPp3X8dekwWd7Ike-1)
  
- ### Adobe Photoshop
- ### Vercel
- ### Railway


All stock photos used for this project are from Pexels and Unsplash

<i> Copyright © 2026 devinammar. All rights reserved.

This project and its source code are proprietary. No part of this repository may be copied, modified, distributed, or used in any form without explicit written permission from the author.

The publicly hosted website/application built from this project may be freely accessed and used by anyone. This permission applies only to usage of the hosted service, it does not grant any rights to the underlying source code.</i>
