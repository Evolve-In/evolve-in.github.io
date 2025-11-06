---
layout: default
title: "About Us"
permalink: /about/
---

<div class="writers-page">
  <div class="container">
    <h2 class="section-title">Meet The <span class="highlight">Writers</span></h2>
    <p class="subtitle">Our team of expert coaches and fitness professionals dedicated to helping you succeed.</p>
    
    <div class="writers-page-grid">
      
      {% for writer in site.writers %}
      <div class="writer-card">
        <a href="{{ writer.url | relative_url }}">
          <div class="writer-card-image">
            <img src="{{ writer.image | relative_url }}" alt="{{ writer.name }}">
          </div>
          <h3>{{ writer.name }}</h3>
          <p>{{ writer.role }}</p>
          <span class="learn-more">View Bio <span>→</span></span>
        </a>
      </div>
      {% endfor %}

    </div>
  </div>
</div>