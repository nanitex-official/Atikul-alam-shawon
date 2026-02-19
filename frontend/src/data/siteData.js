export const commitmentsData = [
  {
    id: 1,
    title: 'নদীভাঙন ও বন্যা–নিরাপত্তা',
    image: '/assets/images/commitment-1.svg',
    link: '/commitment/river-erosion',
    description: 'নদীভাঙন রোধে স্থায়ী সমাধান এবং বন্যা নিয়ন্ত্রণ ব্যবস্থা জোরদার করা।'
  },
  {
    id: 2,
    title: 'ঢাকা নয়, চিকিৎসা হবে রায়পুরেই',
    image: '/assets/images/commitment-2.svg',
    link: '/commitment/treatment',
    description: 'স্থানীয় স্বাস্থ্যসেবা ব্যবস্থা উন্নত করে রায়পুরেই মানসম্মত চিকিৎসা নিশ্চিত করা।'
  },
  {
    id: 3,
    title: 'মাদকমুক্ত কুমিল্লা-৭ (চান্দিনা)',
    image: '/assets/images/commitment-3.svg',
    link: '/commitment/drug-free',
    description: 'মাদকের বিরুদ্ধে সামাজিক আন্দোলন এবং পুনর্বাসন কেন্দ্র স্থাপন।'
  },
  {
    id: 4,
    title: 'শিক্ষা, দক্ষতা ও নারীর ক্ষমতায়ন',
    image: '/assets/images/commitment-4.svg',
    link: '/commitment/education',
    description: 'শিক্ষার মান উন্নয়ন, দক্ষতা উন্নয়ন প্রশিক্ষণ এবং নারীদের আর্থিক স্বাবলম্বী করা।'
  },
  {
    id: 5,
    title: 'সবুজ রায়পুর ও পরিবেশ',
    image: '/assets/images/commitment-5.svg',
    link: '/commitment/green-environment',
    description: 'বৃক্ষরোপণ কর্মসূচি এবং পরিবেশ সংরক্ষণ প্রকল্প বাস্তবায়ন।'
  },
  {
    id: 6,
    title: 'ডিজিটাল ও স্মার্ট জনসেবা',
    image: '/assets/images/commitment-6.svg',
    link: '/commitment/digital-services',
    description: 'ডিজিটাল প্রযুক্তির মাধ্যমে জনসেবা সহজ এবং স্বচ্ছ করা।'
  }
];

export const menuItems = [
  { title: 'হোম', path: '/' },
  { title: 'প্রার্থী পরিচিতি', path: '/candidate-introduction' },
  {
    title: 'এই মেয়াদের অঙ্গীকার',
    path: '/commitment',
    submenu: [
      { title: 'নদীভাঙন ও বন্যা–নিরাপত্তা', path: '/commitment/river-erosion' },
      { title: 'ঢাকা নয়, চিকিৎসা হবে রায়পুরেই', path: '/commitment/treatment' },
      { title: 'মাদকমুক্ত কুমিল্লা-৭ (চান্দিনা)', path: '/commitment/drug-free' },
      { title: 'শিক্ষা, দক্ষতা ও নারী ক্ষমতায়ন', path: '/commitment/education' },
      { title: 'সবুজ রায়পুর ও পরিবেশ', path: '/commitment/green-environment' },
      { title: 'ডিজিটাল ও স্মার্ট জনসেবা', path: '/commitment/digital-services' }
    ]
  },
  { title: 'গ্যালারি', path: '/gallery' },
  { title: 'সংবাদ ও আপডেট', path: '/news' },
  { title: 'যোগাযোগ', path: '/contact' }
];

export const videosList = [
  { id: 1, src: '/assets/videos/video1.mp4', title: 'ভিডিও ১' },
  { id: 2, src: '/assets/videos/video2.mp4', title: 'ভিডিও ২' },
  { id: 3, src: '/assets/videos/video3.mp4', title: 'ভিডিও ৩' },
  { id: 4, src: '/assets/videos/video4.mp4', title: 'ভিডিও ৪' },
  { id: 5, src: '/assets/videos/video5.mp4', title: 'ভিডিও ৫' },
  { id: 6, src: '/assets/videos/video6.mp4', title: 'ভিডিও ৬' }
];
