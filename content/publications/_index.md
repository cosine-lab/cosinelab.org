---
title: "Publications"
description: ""
date: "2025-04-25T01:34:35-05:00"
markup: "html"
unsafe: true
---

<div class="pub-tabs">
  <button class="pub-tab active" onclick="showPubTab('category', this)">By Category</button>
  <button class="pub-tab" onclick="showPubTab('year', this)">By Year</button>
</div>

<script>
function showPubTab(tab, btn) {
  document.querySelectorAll('.pub-view').forEach(function(v) { v.style.display = 'none'; });
  document.querySelectorAll('.pub-tab').forEach(function(b) { b.classList.remove('active'); });
  document.getElementById('pub-' + tab).style.display = 'block';
  btn.classList.add('active');
}
</script>

<!-- ══════════════ BY CATEGORY ══════════════ -->
<div id="pub-category" class="pub-view">

  <div class="pub-section">
    <h3>Journal Articles</h3>
    <ol class="pub-list">

      <li class="pub-item">
        <p class="pub-citation">B. Thongmak, <strong>Y. Xiao</strong>, M. Zhang, Z. Sha, "Linking Cities to Megaregions: A Network Approach to Urban Scaling, Spatial Evolution, and Convergence," <em>Cities</em>. <span class="pub-status">In Review</span></p>
        <div class="pub-links">
          <!-- <a href="/cosinelab.org/papers/FILENAME.pdf" class="pub-link pdf" target="_blank">PDF</a> -->
          <!-- <a href="https://doi.org/..." class="pub-link doi" target="_blank">DOI</a> -->
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation">A. Noorghasemi, <strong>Y. Xiao</strong>, Z. Sha, M. Xiao, C. McComb, "Agent-Based Modeling for the Evaluation of Community Resilience In Silico," <em>Engineering Report</em>. <span class="pub-status">In Review</span></p>
        <div class="pub-links">
          <!-- <a href="/cosinelab.org/papers/FILENAME.pdf" class="pub-link pdf" target="_blank">PDF</a> -->
          <!-- <a href="https://doi.org/..." class="pub-link doi" target="_blank">DOI</a> -->
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation">Y. Cui, Z. Sun, <strong>Y. Xiao</strong>, Z. Sha, J. Koskinen, N. Contractor, W. Chen, "Network Analysis of Two-Stage Customer Decisions With Preference-Guided Market Segmentation," <em>Journal of Computing and Information Science in Engineering</em>, 25(6): 061003, June 2025. <span class="pub-award">Editor's Pick Award</span></p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Cui_2025_TwoStageCustomerDecisionsMarketSegmentationNetAnalysis_journal.pdf" class="pub-link pdf" target="_blank">PDF</a>
          <a href="https://doi.org/10.1115/1.4066420" class="pub-link doi" target="_blank">DOI</a>
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation"><strong>Y. Xiao</strong>, Y. Cui, W. Chen, J. Koskinen, N. Contractor, Z. Sha, "Product Design Incorporating Competition Relations: A Network-Based Design Framework Considering Local Dependencies," <em>Journal of Mechanical Design</em>, vol. 147, no. 2, pp. 021702, Feb 2025.</p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Xiao_2025_ProductDesignConsiderCompetition_journal.pdf" class="pub-link pdf" target="_blank">PDF</a>
          <a href="https://doi.org/10.1115/1.4066426" class="pub-link doi" target="_blank">DOI</a>
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation"><strong>Y. Xiao</strong>, Y. Cui, N. Raut, J. Januar, J. Koskinen, N. Contractor, W. Chen, Z. Sha, "Survey Data on Customer Two-Stage Decision-Making Process in Household Vacuum Cleaner Market," <em>Data in Brief</em>, 54, p.110353, 2024.</p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Xiao_2024_CustomerTwoStage_surveyData_journal.pdf" class="pub-link pdf" target="_blank">PDF</a>
          <a href="https://doi.org/10.1016/j.dib.2024.110353" class="pub-link doi" target="_blank">DOI</a>
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation"><strong>Y. Xiao</strong>, F. Ahmed, Z. Sha, "Graph Neural Network-Based Design Decision Support for Shared Mobility Systems," <em>Journal of Mechanical Design</em>, vol. 145, no. 9, pp. 091703, 2023. <span class="pub-award">Editor's Choice Honorable Mention</span></p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Xiao_2023_GNNBasedDesignDecisionSupport_journal.pdf" class="pub-link pdf" target="_blank">PDF</a>
          <a href="https://doi.org/10.1115/1.4062666" class="pub-link doi" target="_blank">DOI</a>
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation">Z. Sha, Y. Cui, <strong>Y. Xiao</strong>, A. B. Stathopoulos, N. Contractor, Y. Fu, W. Chen, "A Network-Based Discrete Choice Model for Decision-Based Design," <em>Design Science</em>, 9, E7, 2023.</p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Sha_2023_NetBasedDiscreteChoiceModen_journal.pdf" class="pub-link pdf" target="_blank">PDF</a>
          <a href="https://doi.org/10.1017/dsj.2023.4" class="pub-link doi" target="_blank">DOI</a>
          <a href="https://github.com/Yaxin-Cui/network-based-discrete-choice-model" class="pub-link code" target="_blank">CODE</a>
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation"><strong>Y. Xiao</strong>, Z. Sha, "Robust Design of Complex Socio-Technical Systems against Seasonal Effects: A Network Motif-Based Approach," <em>Design Science</em>, 8, E2, 2022.</p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Xiao_2021_NetworkMotifBasedRobustDesign_journal.pdf" class="pub-link pdf" target="_blank">PDF</a>
          <a href="https://doi.org/10.1017/dsj.2021.27" class="pub-link doi" target="_blank">DOI</a>
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation"><strong>Y. Xiao</strong>, D. Ren, P. Xiao, P. Du, "An Equivalent Modeling Method for the Radiated Electromagnetic Interference of PCB Based on Near-field Scanning," <em>Applied Computational Electromagnetics Society Journal</em>, 34(5), 2019.</p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Xiao_2019_PCBRadiate_journal.pdf" class="pub-link pdf" target="_blank">PDF</a>
          <a href="https://journals.riverpublishers.com/index.php/ACES/article/view/8495" class="pub-link doi" target="_blank">DOI</a>
        </div>
      </li>

    </ol>
  </div>

  <div class="pub-section">
    <h3>Refereed Conference Papers</h3>
    <ol class="pub-list">

      <li class="pub-item">
        <p class="pub-citation">J. Qi, <strong>Y. Xiao</strong>, "An AI-Based Framework for Behavioral Residential Load Modeling and Distribution Feeder Analysis," <em>ASME 2026 IDETC-CIE</em>, Houston, TX, Aug 2026. <span class="pub-status">Accepted</span></p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Qi_2026_PowerGridAIAnalysis_conference.pdf" class="pub-link pdf" target="_blank">PDF</a>
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation">S. Thakrar, Z. Sha, <strong>Y. Xiao</strong>, "Comparing Network Representations of U.S. Vehicle Customer Preferences: A Case Study of EV Consideration and Adoption," <em>ASME 2026 IDETC-CIE</em>, Houston, TX, Aug 2026. <span class="pub-status">Accepted</span></p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Thakrar_2026_VehicleNetworkRepresentationComparison_conference.pdf" class="pub-link pdf" target="_blank">PDF</a>
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation"><strong>Y. Xiao</strong>, H. Kaushik, J. Wang, J. Zhang, Z. Sha, "Electric Vehicle Charging Network Optimization Considering Regional Resource Dependencies," <em>ASME 2025 IDETC-CIE</em>, Anaheim, CA, Aug 2025.</p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Xiao_2025_EVChargingPlanningOptimization_conference.pdf" class="pub-link pdf" target="_blank">PDF</a>
          <a href="https://doi.org/10.1115/DETC2025-169092" class="pub-link doi" target="_blank">DOI</a>
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation"><strong>Y. Xiao</strong>, Z. Sha, "Graph Neural Network-Based Link Prediction for Highly Imbalanced Network Data," <em>ASME 2024 IDETC-CIE</em>, Washington, DC, Aug 2024.</p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Xiao_2024_GNNLinkPredictionHighlyImbalancedNetData_conference.pdf" class="pub-link pdf" target="_blank">PDF</a>
          <a href="https://doi.org/10.1115/DETC2024-143786" class="pub-link doi" target="_blank">DOI</a>
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation">B. Thongmak, <strong>Y. Xiao</strong>, A. Layton, Z. Sha, "From Plant-Pollinator to Product-Customer: Bio-Inspired Network Modularity Analysis in Design for Market Systems," <em>CSER 2024</em>, Tucson, AZ, Mar 2024.</p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Thongmak_2024_PlantPollinatorProductCustomer_conference.pdf" class="pub-link pdf" target="_blank">PDF</a>
          <a href="https://doi.org/10.1007/978-3-031-62554-1_31" class="pub-link doi" target="_blank">DOI</a>
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation">B. Thongmak, <strong>Y. Xiao</strong>, P. Gavino, M. Zhang, Z. Sha, "Geospatial Network Analysis of US Megaregions in 40 Years," <em>HICSS 2024</em>, Maui, HI, Jan 2024.</p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Thongmak_2024_GeospatialUSMegaregionsNetworkAnalysis_conference.pdf" class="pub-link pdf" target="_blank">PDF</a>
          <a href="https://doi.org/10.24251/HICSS.2024.679" class="pub-link doi" target="_blank">DOI</a>
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation">P. Gavino, <strong>Y. Xiao</strong>, Y. Cui, W. Chen, Z. Sha, "Evolutionary Co-Mention Network Analysis via Social Media Mining," <em>ASME 2023 IDETC-CIE</em>, Boston, MA, Aug 2023.</p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Gavino_2023_SocialMediaMiningComentionNet_conference.pdf" class="pub-link pdf" target="_blank">PDF</a>
          <a href="https://doi.org/10.1115/DETC2023-115114" class="pub-link doi" target="_blank">DOI</a>
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation"><strong>Y. Xiao</strong>, Y. Cui, M. Cardone, W. Chen, Z. Sha, "Product Competition Analysis for Engineering Design: A Network Mining Approach," <em>CSER 2023</em>, Hoboken, NJ, Mar 2023.</p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Xiao_2023_NetMiningForProductCompetition_conference.pdf" class="pub-link pdf" target="_blank">PDF</a>
          <a href="https://doi.org/10.1007/978-3-031-49179-5_22" class="pub-link doi" target="_blank">DOI</a>
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation">Y. Cui, <strong>Y. Xiao</strong>, Z. Sha, W. Chen, "Network-Based Analysis of Heterogeneous Consideration-then-Choice Customer Preferences with Market Segmentations," <em>CSER 2023</em>, Hoboken, NJ, Mar 2023.</p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Cui_2023_NetBased_HeterogeneousConsiderThenChoice_conference.pdf" class="pub-link pdf" target="_blank">PDF</a>
          <a href="https://doi.org/10.1007/978-3-031-49179-5_36" class="pub-link doi" target="_blank">DOI</a>
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation"><strong>Y. Xiao</strong>, F. Ahmed, Z. Sha, "Travel Links Prediction In Shared Mobility Networks Using Graph Neural Network Models," <em>ASME 2022 IDETC-CIE</em>, St. Louis, MO, Aug 2022.</p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Xiao_2022_SharedMobilityTravelLinkePrediction_conference.pdf" class="pub-link pdf" target="_blank">PDF</a>
          <a href="https://doi.org/10.1115/DETC2022-90694" class="pub-link doi" target="_blank">DOI</a>
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation"><strong>Y. Xiao</strong>, Y. Cui, N. Raut, J. H. Januar, J. Koskinen, N. Contractor, W. Chen, Z. Sha, "Information Retrieval and Survey Design For Two-Stage Customer Preference Modeling," <em>17th International Design Conference</em>, Cavtat, Croatia, May 2022.</p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Xiao_2022_TwoStageCustomerPreferenceInformationRetrievalSurveyDesign_conference.pdf" class="pub-link pdf" target="_blank">PDF</a>
          <a href="https://doi.org/10.1017/pds.2022.83" class="pub-link doi" target="_blank">DOI</a>
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation"><strong>Y. Xiao</strong>, Z. Sha, "Towards Engineering Complex Sociotechnical Systems Using Network Motifs: A Case Study on Bike-Sharing Systems," <em>ASME 2020 IDETC-CIE</em>, Virtual, Aug 2020.</p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Xiao_2020_BikeShareMotif_conference.pdf" class="pub-link pdf" target="_blank">PDF</a>
          <a href="https://doi.org/10.1115/DETC2020-22631" class="pub-link doi" target="_blank">DOI</a>
        </div>
      </li>

    </ol>
  </div>

  <div class="pub-section">
    <h3>Conference Abstracts &amp; Posters</h3>
    <ol class="pub-list">

      <li class="pub-item">
        <p class="pub-citation">B. Thongmak, <strong>Y. Xiao</strong>, M. Zhang, Z. Sha, "Network Analysis of Urban Growth in U.S. Megaregions," <em>CESUN 2025</em>, Arlington, VA, Jun 2025.</p>
        <div class="pub-links">
          <!-- <a href="/cosinelab.org/papers/FILENAME.pdf" class="pub-link pdf" target="_blank">PDF</a> -->
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation"><strong>Y. Xiao</strong>, J. Zhang, Z. Sha, "Electric Vehicle Charging Network Optimization Considering Regional Resource Dependencies," <em>CESUN 2025</em>, Arlington, VA, Jun 2025.</p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Xiao_2025_EVChargingPlanning_poster.pdf" class="pub-link pdf" target="_blank">PDF</a>
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation">M. Zhang, B. Thongmak, <strong>Y. Xiao</strong>, P. Gavino, Z. Sha, L. Zhao, "Explore U.S. Megaregion Dynamics from a Network Science Perspective," <em>1st International Conference on Urban Science and Sustainability</em>, Xiamen, China, Dec 2023.</p>
        <div class="pub-links">
          <!-- <a href="/cosinelab.org/papers/FILENAME.pdf" class="pub-link pdf" target="_blank">PDF</a> -->
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation"><strong>Y. Xiao</strong>, Y. Cui, W. Chen, N. Contractor, J. Koskinen, Z. Sha, "Design for Market Systems with Network-Based Product Competition Analysis," <em>CESUN 2023</em>, Evanston, IL, Nov 2023.</p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Xiao_2023_DesignForMarketSysProductCompetition_abstract.pdf" class="pub-link pdf" target="_blank">PDF</a>
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation"><strong>Y. Xiao</strong>, Z. Sha, "Socio-Technical Systems Engineering and Design: A Meso-Level Network-Based Approach," DTM Student Poster Competition, <em>ASME 2022 IDETC-CIE</em>, St. Louis, MO, Aug 2022. <span class="pub-award">Travel Award</span></p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Xiao_2022_STSEngineeringDesignLocalNetApproach_poster.pdf" class="pub-link pdf" target="_blank">PDF</a>
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation"><strong>Y. Xiao</strong>, Y. Cui, W. Chen, J. Koskinen, N. Contractor, Z. Sha, "A Network-Based Approach to Modeling Product Co-consideration and Choice Relations," <em>Sunbelt 2022</em>, Cairns, Australia, Jul 2022.</p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Xiao_2022_NetBasedProductCoconsiderChoiceRelations_abstract.pdf" class="pub-link pdf" target="_blank">PDF</a>
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation">Y. Cui, <strong>Y. Xiao</strong>, Z. Sha, N. Contractor, J. Koskinen, W. Chen, "Network-based Customer Preference Modeling," <em>Sunbelt 2022</em>, Cairns, Australia, Jul 2022.</p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Cui_2022_NetBasedCustomerPreference_abstract.pdf" class="pub-link pdf" target="_blank">PDF</a>
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation"><strong>Y. Xiao</strong>, Z. Sha, "Robust Design of Complex Socio-Technical Systems using Complex Networks," CIE Graduate Research Poster Competition, <em>ASME 2021 IDETC-CIE</em>, Virtual, Aug 2021. <span class="pub-award">Travel Award</span></p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Xiao_2021_RobustDesign_poster.pdf" class="pub-link pdf" target="_blank">PDF</a>
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation"><strong>Y. Xiao</strong>, Z. Sha, "A Network Motifs-Based Approach to Improving Robustness of Complex Socio-Technical Systems Against Seasonal Effects," <em>Networks 2021</em>, Virtual, Jul 2021.</p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Xiao_2021_NetMotifRobustness_abstract.pdf" class="pub-link pdf" target="_blank">PDF</a>
        </div>
      </li>

    </ol>
  </div>

  <div class="pub-section">
    <h3>Dissertations</h3>
    <ol class="pub-list">
      
      <li class="pub-item">
        <p class="pub-citation"><strong>Y. Xiao</strong>, "Socio-Technical Systems Engineering and Design: A Meso-Level Network-Based Approach," presented to the faculty of Walker Department of Mechanical Engineering, May 2024, The University of Texas at Austin, Austin, Texas.</p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Xiao_2024_STSEngineeringDesignMesoLevelNetworBasedApproach_dissertation.pdf" class="pub-link pdf" target="_blank">PDF</a>
        </div>
      </li>


    </ol>
  </div>

</div><!-- end pub-category -->

<!-- ══════════════ BY YEAR ══════════════ -->
<div id="pub-year" class="pub-view" style="display:none">

  <div class="pub-section">
    <h3>2026</h3>
    <ol class="pub-list">

      <li class="pub-item">
        <p class="pub-citation">J. Qi, <strong>Y. Xiao</strong>, "An AI-Based Framework for Behavioral Residential Load Modeling and Distribution Feeder Analysis," <em>ASME 2026 IDETC-CIE</em>, Houston, TX, Aug 2026. <span class="pub-status">Accepted</span> <span class="pub-badge">Conference</span></p>
        <div class="pub-links">
        <a href="/cosinelab.org/papers/Qi_2026_PowerGridAIAnalysis_conference.pdf" class="pub-link pdf" target="_blank">PDF</a>
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation">S. Thakrar, Z. Sha, <strong>Y. Xiao</strong>, "Comparing Network Representations of U.S. Vehicle Customer Preferences: A Case Study of EV Consideration and Adoption," <em>ASME 2026 IDETC-CIE</em>, Houston, TX, Aug 2026. <span class="pub-status">Accepted</span> <span class="pub-badge">Conference</span></p>
        <div class="pub-links">
        <a href="/cosinelab.org/papers/Thakrar_2026_VehicleNetworkRepresentationComparison_conference.pdf" class="pub-link pdf" target="_blank">PDF</a>
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation">B. Thongmak, <strong>Y. Xiao</strong>, M. Zhang, Z. Sha, "Linking Cities to Megaregions: A Network Approach to Urban Scaling, Spatial Evolution, and Convergence," <em>Cities</em>. <span class="pub-status">In Review</span><span class="pub-badge">Journal</span></p>
        <div class="pub-links">
          <!-- <a href="/cosinelab.org/papers/FILENAME.pdf" class="pub-link pdf" target="_blank">PDF</a> -->
          <!-- <a href="https://doi.org/..." class="pub-link doi" target="_blank">DOI</a> -->
        </div>
      </li>
      
      <li class="pub-item">
        <p class="pub-citation">A. Noorghasemi, <strong>Y. Xiao</strong>, Z. Sha, M. Xiao, C. McComb, "Agent-Based Modeling for the Evaluation of Community Resilience In Silico," <em>Engineering Report</em>. <span class="pub-status">In Review</span><span class="pub-badge">Journal</span></p>
        <div class="pub-links">
          <!-- <a href="/cosinelab.org/papers/FILENAME.pdf" class="pub-link pdf" target="_blank">PDF</a> -->
          <!-- <a href="https://doi.org/..." class="pub-link doi" target="_blank">DOI</a> -->
        </div>
      </li>

    </ol>
  </div>

  <div class="pub-section">
    <h3>2025</h3>
    <ol class="pub-list">

      <li class="pub-item">
        <p class="pub-citation">Y. Cui, Z. Sun, <strong>Y. Xiao</strong>, Z. Sha, J. Koskinen, N. Contractor, W. Chen, "Network Analysis of Two-Stage Customer Decisions With Preference-Guided Market Segmentation," <em>Journal of Computing and Information Science in Engineering</em>, 25(6): 061003, June 2025. <span class="pub-award">Editor's Pick Award</span> <span class="pub-badge">Journal</span></p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Cui_2025_TwoStageCustomerDecisionsMarketSegmentationNetAnalysis_journal.pdf" class="pub-link pdf" target="_blank">PDF</a>
          <a href="https://doi.org/10.1115/1.4066420" class="pub-link doi" target="_blank">DOI</a>
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation"><strong>Y. Xiao</strong>, Y. Cui, W. Chen, J. Koskinen, N. Contractor, Z. Sha, "Product Design Incorporating Competition Relations: A Network-Based Design Framework Considering Local Dependencies," <em>Journal of Mechanical Design</em>, vol. 147, no. 2, pp. 021702, Feb 2025. <span class="pub-badge">Journal</span></p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Xiao_2025_ProductDesignConsiderCompetition_journal.pdf" class="pub-link pdf" target="_blank">PDF</a>
          <a href="https://doi.org/10.1115/1.4066426" class="pub-link doi" target="_blank">DOI</a>
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation"><strong>Y. Xiao</strong>, H. Kaushik, J. Wang, J. Zhang, Z. Sha, "Electric Vehicle Charging Network Optimization Considering Regional Resource Dependencies," <em>ASME 2025 IDETC-CIE</em>, Anaheim, CA, Aug 2025. <span class="pub-badge">Conference</span></p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Xiao_2025_EVChargingPlanningOptimization_conference.pdf" class="pub-link pdf" target="_blank">PDF</a>
          <a href="https://doi.org/10.1115/DETC2025-169092" class="pub-link doi" target="_blank">DOI</a>
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation">B. Thongmak, <strong>Y. Xiao</strong>, M. Zhang, Z. Sha, "Network Analysis of Urban Growth in U.S. Megaregions," <em>CESUN 2025</em>, Arlington, VA, Jun 2025. <span class="pub-badge">Abstract/Poster</span></p>
        <div class="pub-links"></div>
      </li>

      <li class="pub-item">
        <p class="pub-citation"><strong>Y. Xiao</strong>, J. Zhang, Z. Sha, "Electric Vehicle Charging Network Optimization Considering Regional Resource Dependencies," <em>CESUN 2025</em>, Arlington, VA, Jun 2025. <span class="pub-badge">Abstract/Poster</span></p>
        <div class="pub-links">
        <a href="/cosinelab.org/papers/Xiao_2025_EVChargingPlanning_poster.pdf" class="pub-link pdf" target="_blank">PDF</a>
        </div>
      </li>

    </ol>
  </div>

  <div class="pub-section">
    <h3>2024</h3>
    <ol class="pub-list">

      <li class="pub-item">
        <p class="pub-citation"><strong>Y. Xiao</strong>, "Socio-Technical Systems Engineering and Design: A Meso-Level Network-Based Approach," presented to the faculty of Walker Department of Mechanical Engineering, May 2024, The University of Texas at Austin, Austin, Texas. <span class="pub-badge">Dissertation</span></p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Xiao_2024_STSEngineeringDesignMesoLevelNetworBasedApproach_dissertation.pdf" class="pub-link pdf" target="_blank">PDF</a>
        </div>
      </li>
      
      <li class="pub-item">
        <p class="pub-citation"><strong>Y. Xiao</strong>, Y. Cui, N. Raut, J. Januar, J. Koskinen, N. Contractor, W. Chen, Z. Sha, "Survey Data on Customer Two-Stage Decision-Making Process in Household Vacuum Cleaner Market," <em>Data in Brief</em>, 54, p.110353, 2024. <span class="pub-badge">Journal</span></p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Xiao_2024_CustomerTwoStage_surveyData_journal.pdf" class="pub-link pdf" target="_blank">PDF</a>
          <a href="https://doi.org/10.1016/j.dib.2024.110353" class="pub-link doi" target="_blank">DOI</a>
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation"><strong>Y. Xiao</strong>, Z. Sha, "Graph Neural Network-Based Link Prediction for Highly Imbalanced Network Data," <em>ASME 2024 IDETC-CIE</em>, Washington, DC, Aug 2024. <span class="pub-badge">Conference</span></p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Xiao_2024_GNNLinkPredictionHighlyImbalancedNetData_conference.pdf" class="pub-link pdf" target="_blank">PDF</a>
          <a href="https://doi.org/10.1115/DETC2024-143786" class="pub-link doi" target="_blank">DOI</a>
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation">B. Thongmak, <strong>Y. Xiao</strong>, A. Layton, Z. Sha, "From Plant-Pollinator to Product-Customer: Bio-Inspired Network Modularity Analysis in Design for Market Systems," <em>CSER 2024</em>, Tucson, AZ, Mar 2024. <span class="pub-badge">Conference</span></p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Thongmak_2024_PlantPollinatorProductCustomer_conference.pdf" class="pub-link pdf" target="_blank">PDF</a>
          <a href="https://doi.org/10.1007/978-3-031-62554-1_31" class="pub-link doi" target="_blank">DOI</a>
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation">B. Thongmak, <strong>Y. Xiao</strong>, P. Gavino, M. Zhang, Z. Sha, "Geospatial Network Analysis of US Megaregions in 40 Years," <em>HICSS 2024</em>, Maui, HI, Jan 2024. <span class="pub-badge">Conference</span></p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Thongmak_2024_GeospatialUSMegaregionsNetworkAnalysis_conference.pdf" class="pub-link pdf" target="_blank">PDF</a>
          <a href="https://doi.org/10.24251/HICSS.2024.679" class="pub-link doi" target="_blank">DOI</a>
        </div>
      </li>

    </ol>
  </div>

  <div class="pub-section">
    <h3>2023</h3>
    <ol class="pub-list">

      <li class="pub-item">
        <p class="pub-citation"><strong>Y. Xiao</strong>, F. Ahmed, Z. Sha, "Graph Neural Network-Based Design Decision Support for Shared Mobility Systems," <em>Journal of Mechanical Design</em>, vol. 145, no. 9, pp. 091703, 2023. <span class="pub-award">Editor's Choice Honorable Mention</span> <span class="pub-badge">Journal</span></p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Xiao_2023_GNNBasedDesignDecisionSupport_journal.pdf" class="pub-link pdf" target="_blank">PDF</a>
          <a href="https://doi.org/10.1115/1.4062666" class="pub-link doi" target="_blank">DOI</a>
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation">Z. Sha, Y. Cui, <strong>Y. Xiao</strong>, A. B. Stathopoulos, N. Contractor, Y. Fu, W. Chen, "A Network-Based Discrete Choice Model for Decision-Based Design," <em>Design Science</em>, 9, E7, 2023. <span class="pub-badge">Journal</span></p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Sha_2023_NetBasedDiscreteChoiceModen_journal.pdf" class="pub-link pdf" target="_blank">PDF</a>
          <a href="https://doi.org/10.1017/dsj.2023.4" class="pub-link doi" target="_blank">DOI</a>
          <a href="https://github.com/Yaxin-Cui/network-based-discrete-choice-model" class="pub-link code" target="_blank">CODE</a>
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation">P. Gavino, <strong>Y. Xiao</strong>, Y. Cui, W. Chen, Z. Sha, "Evolutionary Co-Mention Network Analysis via Social Media Mining," <em>ASME 2023 IDETC-CIE</em>, Boston, MA, Aug 2023. <span class="pub-badge">Conference</span></p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Gavino_2023_SocialMediaMiningComentionNet_conference.pdf" class="pub-link pdf" target="_blank">PDF</a>
          <a href="https://doi.org/10.1115/DETC2023-115114" class="pub-link doi" target="_blank">DOI</a>
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation"><strong>Y. Xiao</strong>, Y. Cui, M. Cardone, W. Chen, Z. Sha, "Product Competition Analysis for Engineering Design: A Network Mining Approach," <em>CSER 2023</em>, Hoboken, NJ, Mar 2023. <span class="pub-badge">Conference</span></p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Xiao_2023_NetMiningForProductCompetition_conference.pdf" class="pub-link pdf" target="_blank">PDF</a>
          <a href="https://doi.org/10.1007/978-3-031-49179-5_22" class="pub-link doi" target="_blank">DOI</a>
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation">Y. Cui, <strong>Y. Xiao</strong>, Z. Sha, W. Chen, "Network-Based Analysis of Heterogeneous Consideration-then-Choice Customer Preferences with Market Segmentations," <em>CSER 2023</em>, Hoboken, NJ, Mar 2023. <span class="pub-badge">Conference</span></p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Cui_2023_NetBased_HeterogeneousConsiderThenChoice_conference.pdf" class="pub-link pdf" target="_blank">PDF</a>
          <a href="https://doi.org/10.1007/978-3-031-49179-5_36" class="pub-link doi" target="_blank">DOI</a>
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation">M. Zhang, B. Thongmak, <strong>Y. Xiao</strong>, P. Gavino, Z. Sha, L. Zhao, "Explore U.S. Megaregion Dynamics from a Network Science Perspective," <em>1st International Conference on Urban Science and Sustainability</em>, Xiamen, China, Dec 2023. <span class="pub-badge">Abstract/Poster</span></p>
        <div class="pub-links"></div>
      </li>

      <li class="pub-item">
        <p class="pub-citation"><strong>Y. Xiao</strong>, Y. Cui, W. Chen, N. Contractor, J. Koskinen, Z. Sha, "Design for Market Systems with Network-Based Product Competition Analysis," <em>CESUN 2023</em>, Evanston, IL, Nov 2023. <span class="pub-badge">Abstract/Poster</span></p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Xiao_2023_DesignForMarketSysProductCompetition_abstract.pdf" class="pub-link pdf" target="_blank">PDF</a>
        </div>
      </li>

    </ol>
  </div>

  <div class="pub-section">
    <h3>2022</h3>
    <ol class="pub-list">

      <li class="pub-item">
        <p class="pub-citation"><strong>Y. Xiao</strong>, Z. Sha, "Robust Design of Complex Socio-Technical Systems against Seasonal Effects: A Network Motif-Based Approach," <em>Design Science</em>, 8, E2, 2022. <span class="pub-badge">Journal</span></p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Xiao_2021_NetworkMotifBasedRobustDesign_journal.pdf" class="pub-link pdf" target="_blank">PDF</a>
          <a href="https://doi.org/10.1017/dsj.2021.27" class="pub-link doi" target="_blank">DOI</a>
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation"><strong>Y. Xiao</strong>, F. Ahmed, Z. Sha, "Travel Links Prediction In Shared Mobility Networks Using Graph Neural Network Models," <em>ASME 2022 IDETC-CIE</em>, St. Louis, MO, Aug 2022. <span class="pub-badge">Conference</span></p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Xiao_2022_SharedMobilityTravelLinkePrediction_conference.pdf" class="pub-link pdf" target="_blank">PDF</a>
          <a href="https://doi.org/10.1115/DETC2022-90694" class="pub-link doi" target="_blank">DOI</a>
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation"><strong>Y. Xiao</strong>, Y. Cui, N. Raut, J. H. Januar, J. Koskinen, N. Contractor, W. Chen, Z. Sha, "Information Retrieval and Survey Design For Two-Stage Customer Preference Modeling," <em>17th International Design Conference</em>, Cavtat, Croatia, May 2022. <span class="pub-badge">Conference</span></p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Xiao_2022_TwoStageCustomerPreferenceInformationRetrievalSurveyDesign_conference.pdf" class="pub-link pdf" target="_blank">PDF</a>
          <a href="https://doi.org/10.1017/pds.2022.83" class="pub-link doi" target="_blank">DOI</a>
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation"><strong>Y. Xiao</strong>, Z. Sha, "Socio-Technical Systems Engineering and Design: A Meso-Level Network-Based Approach," DTM Student Poster Competition, <em>ASME 2022 IDETC-CIE</em>, St. Louis, MO, Aug 2022. <span class="pub-award">Travel Award</span> <span class="pub-badge">Abstract/Poster</span></p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Xiao_2022_STSEngineeringDesignLocalNetApproach_poster.pdf" class="pub-link pdf" target="_blank">PDF</a>
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation"><strong>Y. Xiao</strong>, Y. Cui, W. Chen, J. Koskinen, N. Contractor, Z. Sha, "A Network-Based Approach to Modeling Product Co-consideration and Choice Relations," <em>Sunbelt 2022</em>, Cairns, Australia, Jul 2022. <span class="pub-badge">Abstract/Poster</span></p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Xiao_2022_NetBasedProductCoconsiderChoiceRelations_abstract.pdf" class="pub-link pdf" target="_blank">PDF</a>
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation">Y. Cui, <strong>Y. Xiao</strong>, Z. Sha, N. Contractor, J. Koskinen, W. Chen, "Network-based Customer Preference Modeling," <em>Sunbelt 2022</em>, Cairns, Australia, Jul 2022. <span class="pub-badge">Abstract/Poster</span></p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Cui_2022_NetBasedCustomerPreference_abstract.pdf" class="pub-link pdf" target="_blank">PDF</a>
        </div>
      </li>

    </ol>
  </div>

  <div class="pub-section">
    <h3>2021</h3>
    <ol class="pub-list">

      <li class="pub-item">
        <p class="pub-citation"><strong>Y. Xiao</strong>, Z. Sha, "Robust Design of Complex Socio-Technical Systems using Complex Networks," CIE Graduate Research Poster Competition, <em>ASME 2021 IDETC-CIE</em>, Virtual, Aug 2021. <span class="pub-award">Travel Award</span> <span class="pub-badge">Abstract/Poster</span></p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Xiao_2021_RobustDesign_poster.pdf" class="pub-link pdf" target="_blank">PDF</a>
        </div>
      </li>

      <li class="pub-item">
        <p class="pub-citation"><strong>Y. Xiao</strong>, Z. Sha, "A Network Motifs-Based Approach to Improving Robustness of Complex Socio-Technical Systems Against Seasonal Effects," <em>Networks 2021</em>, Virtual, Jul 2021. <span class="pub-badge">Abstract/Poster</span></p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Xiao_2021_NetMotifRobustness_abstract.pdf" class="pub-link pdf" target="_blank">PDF</a>
        </div>
      </li>

    </ol>
  </div>

  <div class="pub-section">
    <h3>2020</h3>
    <ol class="pub-list">

      <li class="pub-item">
        <p class="pub-citation"><strong>Y. Xiao</strong>, Z. Sha, "Towards Engineering Complex Sociotechnical Systems Using Network Motifs: A Case Study on Bike-Sharing Systems," <em>ASME 2020 IDETC-CIE</em>, Virtual, Aug 2020. <span class="pub-badge">Conference</span></p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Xiao_2020_BikeShareMotif_conference.pdf" class="pub-link pdf" target="_blank">PDF</a>
          <a href="https://doi.org/10.1115/DETC2020-22631" class="pub-link doi" target="_blank">DOI</a>
        </div>
      </li>

    </ol>
  </div>

  <div class="pub-section">
    <h3>2019</h3>
    <ol class="pub-list">

      <li class="pub-item">
        <p class="pub-citation"><strong>Y. Xiao</strong>, D. Ren, P. Xiao, P. Du, "An Equivalent Modeling Method for the Radiated Electromagnetic Interference of PCB Based on Near-field Scanning," <em>Applied Computational Electromagnetics Society Journal</em>, 34(5), 2019. <span class="pub-badge">Journal</span></p>
        <div class="pub-links">
          <a href="/cosinelab.org/papers/Xiao_2019_PCBRadiate_journal.pdf" class="pub-link pdf" target="_blank">PDF</a>
          <a href="https://journals.riverpublishers.com/index.php/ACES/article/view/8495" class="pub-link doi" target="_blank">DOI</a>
        </div>
      </li>

    </ol>
  </div>

</div><!-- end pub-year -->
