#!/usr/bin/env node

/**
 * Projector Windows Survey Analysis Script
 *
 * Usage:
 * 1. Export survey data from browser localStorage by running exportSurveyData() in console
 * 2. Copy the JSON array
 * 3. Save to survey-responses.json in this directory
 * 4. Run: node analyze-survey.js
 *
 * Or paste responses directly into the script below
 */

// Option 1: Load from file
const fs = require('fs');
let responses = [];

try {
  responses = JSON.parse(fs.readFileSync('./survey-responses.json', 'utf8'));
} catch (err) {
  console.log('No survey-responses.json found. Using sample data or paste responses below.\n');

  // Option 2: Paste responses here
  responses = [
    // Paste exported survey data here as array
  ];
}

if (responses.length === 0) {
  console.log('No survey responses to analyze.');
  console.log('\nTo collect responses:');
  console.log('1. Open survey page and DevTools');
  console.log('2. Run: exportSurveyData()');
  console.log('3. Copy the JSON array output');
  console.log('4. Save to survey-responses.json');
  console.log('5. Run this script again');
  process.exit(0);
}

// Analysis functions
function analyzeUsage(responses) {
  const usageCounts = {};
  responses.forEach(r => {
    (r.usage || []).forEach(use => {
      usageCounts[use] = (usageCounts[use] || 0) + 1;
    });
  });
  return usageCounts;
}

function analyzeFrequency(responses) {
  const freqCounts = {};
  responses.forEach(r => {
    const freq = r.frequency;
    if (freq) {
      freqCounts[freq] = (freqCounts[freq] || 0) + 1;
    }
  });
  return freqCounts;
}

function analyzeFeatures(responses) {
  const featureCounts = {};
  responses.forEach(r => {
    (r.features || []).forEach(feat => {
      featureCounts[feat] = (featureCounts[feat] || 0) + 1;
    });
  });
  return featureCounts;
}

function analyzePricing(responses) {
  const pricingCounts = {};
  responses.forEach(r => {
    const model = r['pricing-model'];
    if (model) {
      pricingCounts[model] = (pricingCounts[model] || 0) + 1;
    }
  });
  return pricingCounts;
}

function analyzeDndPrice(responses) {
  const priceCounts = {};
  responses.forEach(r => {
    const price = r['dnd-price'];
    if (price !== undefined) {
      priceCounts[price] = (priceCounts[price] || 0) + 1;
    }
  });
  return priceCounts;
}

function analyzeDonations(responses) {
  const donationCounts = {};
  responses.forEach(r => {
    const donation = r.donations;
    if (donation) {
      donationCounts[donation] = (donationCounts[donation] || 0) + 1;
    }
  });
  return donationCounts;
}

function analyzeTopRequests(responses) {
  return responses
    .filter(r => r['top-request'])
    .map(r => r['top-request'])
    .slice(0, 10); // Top 10
}

function calculatePercentage(count, total) {
  return ((count / total) * 100).toFixed(1);
}

function sortByCount(obj) {
  return Object.entries(obj)
    .sort((a, b) => b[1] - a[1])
    .map(([key, count]) => ({ key, count }));
}

// Run analysis
console.log('='.repeat(60));
console.log('PROJECTOR WINDOWS SURVEY ANALYSIS');
console.log('='.repeat(60));
console.log(`\nTotal Responses: ${responses.length}`);
console.log(`Date Range: ${new Date(responses[0]?.timestamp).toLocaleDateString()} - ${new Date(responses[responses.length - 1]?.timestamp).toLocaleDateString()}\n`);

// Usage patterns
console.log('━'.repeat(60));
console.log('1. PRIMARY USE CASES');
console.log('━'.repeat(60));
const usage = sortByCount(analyzeUsage(responses));
usage.forEach(({ key, count }) => {
  console.log(`  ${key.padEnd(20)} ${count.toString().padStart(3)} (${calculatePercentage(count, responses.length)}%)`);
});

// Frequency
console.log('\n━'.repeat(60));
console.log('2. USAGE FREQUENCY');
console.log('━'.repeat(60));
const frequency = sortByCount(analyzeFrequency(responses));
frequency.forEach(({ key, count }) => {
  console.log(`  ${key.padEnd(20)} ${count.toString().padStart(3)} (${calculatePercentage(count, responses.length)}%)`);
});

// Features
console.log('\n━'.repeat(60));
console.log('3. MOST REQUESTED FEATURES');
console.log('━'.repeat(60));
const features = sortByCount(analyzeFeatures(responses));
features.forEach(({ key, count }) => {
  console.log(`  ${key.padEnd(30)} ${count.toString().padStart(3)} (${calculatePercentage(count, responses.length)}%)`);
});

// Pricing model preference
console.log('\n━'.repeat(60));
console.log('4. PRICING MODEL PREFERENCE');
console.log('━'.repeat(60));
const pricing = sortByCount(analyzePricing(responses));
pricing.forEach(({ key, count }) => {
  console.log(`  ${key.padEnd(30)} ${count.toString().padStart(3)} (${calculatePercentage(count, responses.length)}%)`);
});

// D&D bundle pricing
console.log('\n━'.repeat(60));
console.log('5. D&D BUNDLE PRICING SENSITIVITY');
console.log('━'.repeat(60));
const dndPrice = sortByCount(analyzeDndPrice(responses));
dndPrice.forEach(({ key, count }) => {
  console.log(`  $${key.padEnd(5)} ${count.toString().padStart(3)} (${calculatePercentage(count, responses.length)}%)`);
});

// Average D&D price
const dndPrices = responses
  .map(r => parseInt(r['dnd-price']) || 0)
  .filter(p => p > 0);
const avgDndPrice = dndPrices.length > 0
  ? (dndPrices.reduce((a, b) => a + b, 0) / dndPrices.length).toFixed(2)
  : 'N/A';
console.log(`\n  Average willingness to pay: $${avgDndPrice}`);

// Donation support
console.log('\n━'.repeat(60));
console.log('6. DONATION SUPPORT');
console.log('━'.repeat(60));
const donations = sortByCount(analyzeDonations(responses));
donations.forEach(({ key, count }) => {
  console.log(`  ${key.padEnd(20)} ${count.toString().padStart(3)} (${calculatePercentage(count, responses.length)}%)`);
});

// Top requests
console.log('\n━'.repeat(60));
console.log('7. TOP FEATURE REQUESTS (Open-ended)');
console.log('━'.repeat(60));
const topRequests = analyzeTopRequests(responses);
topRequests.forEach((request, i) => {
  console.log(`  ${(i + 1).toString().padStart(2)}. ${request}`);
});

// Key insights
console.log('\n━'.repeat(60));
console.log('8. KEY INSIGHTS & RECOMMENDATIONS');
console.log('━'.repeat(60));

const mostPopularUse = usage[0];
const mostWantedFeature = features[0];
const preferredPricing = pricing[0];
const donationWilling = donations.filter(d => d.key === 'yes' || d.key === 'maybe')
  .reduce((sum, d) => sum + d.count, 0);

console.log(`\n  Primary Audience: ${mostPopularUse.key} (${calculatePercentage(mostPopularUse.count, responses.length)}%)`);
console.log(`  Most Wanted Feature: ${mostWantedFeature.key}`);
console.log(`  Preferred Model: ${preferredPricing.key}`);
console.log(`  Donation Support: ${calculatePercentage(donationWilling, responses.length)}% willing`);
console.log(`  D&D Bundle Sweet Spot: $${avgDndPrice}`);

console.log('\n  Recommendations:');
console.log('  1. Build top 3 most-requested features first');
console.log(`  2. Price ${preferredPricing.key} based on survey preference`);
console.log('  3. Add Ko-fi/donation button immediately (low effort, proven interest)');
console.log('  4. Focus on primary use case for marketing messaging');

console.log('\n' + '='.repeat(60));
console.log('Analysis complete. For raw data, see survey-responses.json');
console.log('='.repeat(60) + '\n');

// Export summary to JSON
const summary = {
  totalResponses: responses.length,
  usage,
  frequency,
  features,
  pricing,
  dndPrice,
  donations,
  avgDndPrice,
  topRequests,
  generatedAt: new Date().toISOString()
};

fs.writeFileSync('./survey-analysis-summary.json', JSON.stringify(summary, null, 2));
console.log('Summary exported to: survey-analysis-summary.json\n');
