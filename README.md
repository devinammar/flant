# On Progress

## Problem

- ### There are Hundreds of Thousands Plant Species in the World, Making Identification Difficult
  
  Current estimates put the total number of plant species at approximately 390,000, with thousands of new vascular plants still being discovered each year. With such a vast number of species and their wide range of physical variations, memorizing them one by one is simply not feasible. This is precisely why a platform that enables quick and reliable plant identification is essential. [National Library of Medicine](https://pmc.ncbi.nlm.nih.gov/articles/PMC11970369/)
  
- ### Plant Information Is Scattered Across Many Sources (Fragmented) and Difficult to Find Quickly
  
  Knowledge about plant species remains highly fragmented across multiple databases, each with its own significant gaps in information. Non-random gaps within a given database can intersect with gaps in other databases in unexpected ways, reducing the number of species about which we have a comprehensive understanding. This means that to look up information on a single plant, users often have to consult multiple sites at once. [BioRxiv](https://www.biorxiv.org/content/10.1101/2025.03.09.642182v1.full.pdf)
  
- ### Data Quality from Non-Experts Is Inconsistent
  
  Data collected in the field by non-experts (citizen scientists) is difficult to ensure in terms of accuracy and completeness, as it is gathered by individuals with varying levels of training and expertise. While the majority of non-expert data tends to be accurate in what was observed, it is often incomplete — non-experts detect less information than experts do. This underscores the need for a platform that provides validated data from trusted sources (such as the Trefle.io API and plant.id API). [National Library of Medicine](https://pmc.ncbi.nlm.nih.gov/articles/PMC5567195/)
  
- ### The Need for Open Access to Scientific Data
  
  Open access to scientific literature and related data is a powerful mechanism for creating and validating knowledge, and for supporting the development of science as a public good. It is consistent with the Principle of Universality of Science, which requires freedom of communication for scientists, as well as equitable access to data, information, and other resources for research. Furthermore, the UNESCO Recommendation on Open Science affirms that open science furthers the right of everyone to share in scientific advancement and its benefits, as stated in Article 27.1 of the Universal Declaration of Human Rights. [UNESCO](https://www.unesco.org/en/open-science/about) [International Science Council](https://council.science/publications/open-access-to-scientific-data-and-literature-and-the-assessment-of-research-by-metrics/)

## Solution

- ### Providing an Integrated Botanical Database in a Single Platform
  
  Flant provides access to plant information by name (both common and scientific), integrated directly with the Trefle.io API — a free, open-source botanical REST API serving as a global plant database with over one million species, covering scientific names, synonyms, taxonomic classifications, and images, with data aggregated from various international sources such as Plants of the World Online (POWO) and USDA Plants. With this approach, users no longer need to open dozens of different sites, all botanical information is available in one easily accessible platform. [Grokipedia](https://grokipedia.com/page/trefle)
  
- ### Fast and Accurate Image-Based Plant Identification
  
  Flant allows users to identify plants simply by uploading a photo, using Plant.id API technology. Plant.id is capable of identifying more than 35,000 plant classes with a TOP3 identification accuracy of 93%, and the identification process takes a maximum of 2 seconds. With this approach, anyone — even those who are not botanists can instantly identify a plant species without needing to memorize its scientific name. [Plant.id](https://www.kindwise.com/plant-id)
  
- ### Use of Scientifically Validated Data Sources
  
  To ensure the accuracy of information, Flant exclusively uses data from scientifically tested APIs. A study published in the journal AoB Plants by Hamlyn G. Jones (2020) concluded that AI-based automatic image recognition technology holds significant value for beginners and the general public in identifying plants, while also encouraging greater interest in botanical science. [National Library of Medicine](https://pmc.ncbi.nlm.nih.gov/articles/PMC7640754/)
  
- ### Open Access for Everyone
  
  Flant is designed as a free platform accessible to anyone (students, researchers, gardeners, and the general public alike). The Trefle Plant API provides free access to extensive botanical information, making it ideal for building educational applications, with no credit card required and easy integration for developers. This is fully in line with the open access principle in science, where scientific information should be accessible to all without barriers. [FreeAPIHub](https://freeapihub.com/apis/trefle-plants)

## Software Development Life Cycle

### Waterfall
