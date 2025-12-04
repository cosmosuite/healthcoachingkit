"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
    Heart,
    Sparkles,
    Users,
    FileText,
    Download,
    Check,
    Star,
    Gift,
    Layout,
    PlayCircle,
    Image as ImageIcon,
    Briefcase,
    PenTool,
    Share2,
    ShieldCheck,
    Clock,
    ChevronDown
} from "lucide-react";
import { useState } from "react";
import { useCurrency } from "@/contexts/CurrencyContext";
import { CurrencySwitcher } from "@/components/CurrencySwitcher";
import { motion } from "framer-motion";

export default function Home() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const { formatPrice, getPrice, currency } = useCurrency();

    // Function to get UTM parameters and build checkout URL
    const getCheckoutUrl = () => {
        if (typeof window === 'undefined') {
            return currency === 'INR'
                ? 'https://in-checkout.lifecoachingkit.store/branding-bundle'
                : 'https://checkout.lifecoachingkit.store/branding-bundle';
        }

        const urlParams = new URLSearchParams(window.location.search);
        const utmParams = new URLSearchParams();

        // Capture all UTM parameters
        const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
        utmKeys.forEach(key => {
            const value = urlParams.get(key);
            if (value) {
                utmParams.append(key, value);
            }
        });

        // Capture any other tracking parameters (fbclid, gclid, etc.)
        const trackingKeys = ['fbclid', 'gclid', 'msclkid', 'ttclid'];
        trackingKeys.forEach(key => {
            const value = urlParams.get(key);
            if (value) {
                utmParams.append(key, value);
            }
        });

        const baseUrl = currency === 'INR'
            ? 'https://in-checkout.lifecoachingkit.store/branding-bundle'
            : 'https://checkout.lifecoachingkit.store/branding-bundle';
        const queryString = utmParams.toString();

        return queryString ? `${baseUrl}?${queryString}` : baseUrl;
    };

    // Function to handle checkout redirect
    const handleCheckoutRedirect = () => {
        const checkoutUrl = getCheckoutUrl();
        window.open(checkoutUrl, '_self');
    };

    const features = [
        {
            icon: FileText,
            title: "2,000+ Templates",
            description: "Meticulously crafted Health and Wellness templates for every aspect of your coaching business."
        },
        {
            icon: Briefcase,
            title: "Business Essentials",
            description: "73-page business plan, logos, brand boards, business cards, and email signatures."
        },
        {
            icon: Users,
            title: "Client Management",
            description: "32 client intake forms, 61-page onboarding pack, and 48-page offboarding pack."
        },
        {
            icon: PenTool,
            title: "Coaching Tools",
            description: "114 client worksheets, Health and Wellness Jumpstart Workbook, and Wheel of Life Workbook."
        },
        {
            icon: Share2,
            title: "Social Media Suite",
            description: "1,000 Instagram templates, 195 Pinterest templates, and social media templates for all platforms."
        },
        {
            icon: Gift,
            title: "Lead Magnets",
            description: "143 lead magnet templates including checklists, infographics, pricing guides, and planners."
        }
    ];

    const detailedProducts = [
        {
            title: "Business Branding & Essentials",
            description: "Establish a professional foundation with everything you need to look the part from day one.",
            image: "/assets/healthcoaching/All Business Essentials.avif",
            items: [
                "73 Page Business Plan",
                "Logos",
                "Brand Board",
                "Business Cards",
                "Email Signatures",
                "Media Kit"
            ]
        },
        {
            title: "Client Onboarding & Offboarding",
            description: "Create a seamless, premium experience for your clients from the moment they sign up.",
            image: "/assets/healthcoaching/Client Forms + Client On:Off Boarding Form.avif",
            items: [
                "32 Client Intake Forms",
                "61 Page Client Onboarding Pack",
                "48 Page Client Offboarding Pack",
                "Onboarding Templates",
                "Offboarding Templates"
            ]
        },
        {
            title: "Coaching Resources & Workbooks",
            description: "Empower your clients with professionally designed tools to facilitate their transformation.",
            image: "/assets/healthcoaching/Client Workbooks.avif",
            items: [
                "114 Client Worksheets",
                "54 Page Health and Wellness Jumpstart Workbook",
                "44 Page Wheel of Life Workbook",
                "Client Workbooks",
                "Health and Wellness Planners"
            ]
        },
        {
            title: "Social Media & Marketing Templates",
            description: "Never run out of content ideas. Engage your audience across all major platforms.",
            image: "/assets/healthcoaching/Social media Templates .webp",
            items: [
                "1,000 Instagram Templates (Posts, Stories, Carousels)",
                "195 Pinterest Templates (3 sizes)",
                "Pinterest Board Cover Templates",
                "120 Social Media Templates (Facebook, Twitter, LinkedIn)",
                "Highlight Icons"
            ]
        },
        {
            title: "Lead Magnets & Business Essentials",
            description: "Grow your list and manage your business with ease.",
            image: "/assets/healthcoaching/Client Worksheet + LKead Magnets .avif",
            items: [
                "143 Lead Magnet Templates",
                "Client Checklists",
                "Infographics",
                "Pricing Guides",
                "Health and Wellness Trackers"
            ]
        }
    ];

    const testimonials = [
        {
            name: "Sarah J.",
            role: "Health Coach",
            content: "This toolkit saved me months of work. The templates are beautiful and so easy to customize!",
            rating: 5
        },
        {
            name: "Michael T.",
            role: "Wellness Coach",
            content: "A game-changer for my branding. I finally look like the professional I am.",
            rating: 5
        },
        {
            name: "Jessica R.",
            role: "Holistic Health Coach",
            content: "Everything I needed to launch my practice. The workbooks are incredible.",
            rating: 5
        }
    ];

    const faqs = [
        {
            question: "Do I need Canva Pro?",
            answer: "No! The templates work with both free and Pro Canva accounts. You can customize everything with a free account."
        },
        {
            question: "Are photos included?",
            answer: "Yes, all photos used in the templates are included as standard."
        },
        {
            question: "How do I access the files?",
            answer: "You'll receive an instant PDF download with links to all the Canva templates immediately after purchase."
        },
        {
            question: "Can I resell these?",
            answer: "No, this is for your own business use or to use with your clients. You cannot resell the templates themselves."
        },
        {
            question: "Is there a refund policy?",
            answer: "Due to the digital nature of the product, we generally do not offer refunds. However, we are happy to help if you have any issues."
        }
    ];

    const productImages = [
        "/assets/healthcoaching/All Business Essentials.avif",
        "/assets/healthcoaching/Client Forms + Client On:Off Boarding Form.avif",
        "/assets/healthcoaching/Client Workbooks.avif",
        "/assets/healthcoaching/Social media Templates .webp",
        "/assets/healthcoaching/Client Worksheet + LKead Magnets .avif",
        "/assets/healthcoaching/What's Inside.avif",
        "/assets/healthcoaching/Hero Image .avif",
        "/assets/healthcoaching/Instagram Templates .avif"
    ];

    // Split images for marquee
    const row1Images = productImages.slice(0, 4);
    const row2Images = productImages.slice(4, 8);

    return (
        <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary-foreground overflow-x-hidden">

            {/* Navbar */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/50"
            >
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-serif font-bold text-xl">H</div>
                            <h1 className="text-lg md:text-xl font-bold text-foreground tracking-tight">
                                Health Coaching Kit
                            </h1>
                        </div>
                        <div className="flex items-center gap-3">
                            <CurrencySwitcher />
                            <Button variant="ghost" size="sm" className="hidden md:flex text-muted-foreground hover:text-foreground" onClick={() => window.open('https://members.weddingkit.pro/login', '_self')}>
                                Login
                            </Button>
                            <Button size="sm" className="rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20" onClick={handleCheckoutRedirect}>
                                Get Access
                            </Button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-12 md:pt-20 pb-16 md:pb-32 px-4 md:px-6 bg-gradient-to-b from-background via-background to-primary/5">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/10 rounded-full blur-3xl" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-8 md:mb-12">
                        <div className="flex justify-center gap-1 mb-3 md:mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <div className="flex justify-center mb-6 md:mb-8">
                            <img
                                src="/images/hero-testimonial.jpg"
                                alt="Customer Testimonial"
                                className="rounded-lg shadow-lg max-w-[280px] md:max-w-sm border border-border"
                            />
                        </div>


                        <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 md:mb-6 leading-relaxed md:leading-relaxed px-2 max-w-5xl mx-auto">
                            Launch Your <span className="bg-primary/10 text-primary px-2 py-1 rounded inline transform -rotate-1">Profitable Health Coaching Business</span> In Days With This <span className="bg-primary/10 text-primary px-2 py-1 rounded inline transform -rotate-1">Done-For-You Branding Toolkit</span>
                        </h1>

                        <p className="text-lg sm:text-lg md:text-2xl text-muted-foreground mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
                            2,000+ fully customizable Health and Wellness Canva templates with pre-written content - from client workbooks to social media posts, everything you need to look professional and attract clients
                        </p>

                        {/* Main Benefits List */}
                        <div className="mb-6 md:mb-8 max-w-2xl mx-auto px-4">
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-base md:text-base">
                                <li className="flex items-center gap-2.5 md:gap-3">
                                    <Check className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 text-primary" />
                                    <span>2,000+ Canva Templates</span>
                                </li>
                                <li className="flex items-center gap-2.5 md:gap-3">
                                    <Check className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 text-primary" />
                                    <span>Fully Pre-Written Content</span>
                                </li>
                                <li className="flex items-center gap-2.5 md:gap-3">
                                    <Check className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 text-primary" />
                                    <span>Client Workbooks & Worksheets</span>
                                </li>
                                <li className="flex items-center gap-2.5 md:gap-3">
                                    <Check className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 text-primary" />
                                    <span>Social Media Suite</span>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-12 px-4">
                            <Button size="lg" className="w-full sm:w-auto text-lg md:text-xl px-6 md:px-8 py-5 md:py-6 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all" onClick={handleCheckoutRedirect}>
                                <Download className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                                Get Instant Access
                            </Button>
                            <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg md:text-xl px-6 md:px-8 py-5 md:py-6 border-2 rounded-full" onClick={handleCheckoutRedirect}>
                                <PlayCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                                See What's Inside
                            </Button>
                        </div>

                        <p className="text-sm md:text-sm text-muted-foreground flex items-center justify-center gap-2">
                            <Check className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                            Compatible with Free & Pro Canva • Instant download
                        </p>
                    </div>

                    {/* Hero Image */}
                    <div className="relative max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border-4 md:border-8 border-white"
                        >
                            <img
                                src="/assets/healthcoaching/Hero Image .avif"
                                alt="Health and Wellness Branding Toolkit Hero"
                                className="w-full h-auto"
                            />
                        </motion.div>
                        {/* Floating Badge */}
                        <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-white text-foreground rounded-full p-4 md:p-6 shadow-xl hidden sm:block border border-border">
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold font-serif text-primary">2k+</div>
                                <div className="text-sm md:text-base font-medium">Templates</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Product Gallery Section (Marquee) */}
            <section className="py-12 md:py-24 px-4 md:px-6 bg-background overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10 md:mb-16">
                        <Badge variant="secondary" className="mb-3 md:mb-4 text-sm md:text-base px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 text-primary border-none">
                            <ImageIcon className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 inline" />
                            Inside the Toolkit
                        </Badge>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-3 md:mb-4 px-2">
                            Beautifully Designed Templates
                        </h2>
                        <p className="text-lg md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                            A peek inside your comprehensive coaching business system
                        </p>
                    </div>

                    <div className="space-y-4 md:space-y-6">
                        {/* Row 1 - Scroll Left */}
                        <div className="relative">
                            <div className="flex gap-3 md:gap-4 animate-[scroll-left_40s_linear_infinite] hover:[animation-play-state:paused]">
                                {[...row1Images, ...row1Images, ...row1Images].map((image, index) => (
                                    <div
                                        key={index}
                                        className="relative flex-shrink-0 w-[280px] md:w-[320px] group overflow-hidden rounded-lg border-2 border-border hover:border-primary/50 transition-all hover:shadow-lg aspect-[4/3]"
                                    >
                                        <img
                                            src={image}
                                            alt={`Gallery ${index}`}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Row 2 - Scroll Right */}
                        <div className="relative">
                            <div className="flex gap-3 md:gap-4 animate-[scroll-right_40s_linear_infinite] hover:[animation-play-state:paused]">
                                {[...row2Images, ...row2Images, ...row2Images].map((image, index) => (
                                    <div
                                        key={index}
                                        className="relative flex-shrink-0 w-[280px] md:w-[320px] group overflow-hidden rounded-lg border-2 border-border hover:border-primary/50 transition-all hover:shadow-lg aspect-[4/3]"
                                    >
                                        <img
                                            src={image}
                                            alt={`Gallery ${index}`}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-10 md:mt-16">
                        <Button size="lg" className="text-lg md:text-xl px-6 md:px-8 py-5 md:py-6 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all" onClick={handleCheckoutRedirect}>
                            <Download className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                            Get Instant Access
                        </Button>
                    </div>
                </div>
            </section>

            {/* 3. Features Grid */}
            <section className="py-12 md:py-24 px-4 md:px-6 bg-muted/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10 md:mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-3 md:mb-4 px-2">
                            Stop Chaos. Start Coaching.
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                            From branding to client management - this comprehensive Health and Wellness toolkit solves every business challenge before it becomes a problem.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-16">
                        {features.map((feature, index) => (
                            <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group bg-background">
                                <CardContent className="p-5 md:p-8">
                                    <div className="flex items-start gap-3 md:block">
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center mb-0 md:mb-4 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                                            <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg md:text-xl font-serif font-semibold mb-1.5 md:mb-2">{feature.title}</h3>
                                            <p className="text-base md:text-base text-muted-foreground">{feature.description}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. What's Included (Summary) */}
            <section className="py-12 md:py-24 px-4 md:px-6 bg-gradient-to-b from-background to-secondary/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <Badge variant="secondary" className="mb-3 md:mb-4 text-sm md:text-base px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 text-primary border-none">
                                <Heart className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 inline" />
                                What's Included
                            </Badge>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 md:mb-6">
                                Transform Your Business with One Toolkit
                            </h2>

                            <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                        <Check className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-lg md:text-xl font-semibold mb-1">Complete Branding Suite</h3>
                                        <p className="text-base md:text-base text-muted-foreground">73-page business plan, logos, brand boards, business cards, and email signatures to look professional instantly.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                        <Check className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-lg md:text-xl font-semibold mb-1">Client Management System</h3>
                                        <p className="text-base md:text-base text-muted-foreground">32 client intake forms, 61-page onboarding pack, and 48-page offboarding pack to impress your clients.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                        <Check className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-lg md:text-xl font-semibold mb-1">Coaching Tools & Workbooks</h3>
                                        <p className="text-base md:text-base text-muted-foreground">114 client worksheets, Health and Wellness Jumpstart Workbook, and Wheel of Life Workbook to facilitate client transformation.</p>
                                    </div>
                                </div>
                            </div>

                            <Separator className="my-6 md:my-8" />

                            <div>
                                <h3 className="text-xl md:text-2xl font-serif font-semibold mb-3 md:mb-4 flex items-center gap-2">
                                    <Gift className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                                    Everything You Need
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 text-sm md:text-base text-muted-foreground">
                                    {["Business Plan", "Instagram Templates", "Pinterest Templates", "Client Worksheets", "Lead Magnets", "ChatGPT Prompts"].map((item, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary flex-shrink-0" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="relative order-1 lg:order-2">
                            <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border-2 md:border-4 border-white">
                                <img
                                    src="/assets/healthcoaching/What's Inside.avif"
                                    alt="What's included in the toolkit"
                                    className="w-full h-auto"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-10 md:mt-16">
                        <Button size="lg" className="text-lg md:text-xl px-6 md:px-8 py-5 md:py-6 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all" onClick={handleCheckoutRedirect}>
                            <Download className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                            Get Instant Access
                        </Button>
                    </div>
                </div>
            </section>

            {/* 5. Detailed Product Showcase (Alternating Rows) */}
            <section className="py-12 md:py-24 px-4 md:px-6 bg-card">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10 md:mb-16">
                        <Badge variant="secondary" className="mb-3 md:mb-4 text-sm md:text-base px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 text-primary border-none">
                            <FileText className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 inline" />
                            Inside Your Toolkit
                        </Badge>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-3 md:mb-4 px-2">
                            A Complete Business in a Box
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                            Every template is fully pre-written with captivating content and designed to convert.
                        </p>
                    </div>

                    <div className="space-y-24 md:space-y-32">
                        {detailedProducts.map((product, index) => (
                            <div key={index} className="relative border-2 border-primary/20 rounded-lg p-4 md:border-0 md:rounded-none md:p-0">
                                <div className={`grid lg:grid-cols-2 gap-12 md:gap-20 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>

                                    {/* Image Column */}
                                    <motion.div
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8 }}
                                        className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                                    >
                                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                        {/* Decorative background blob */}
                                        <div className={`absolute -z-10 top-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl ${index % 2 === 0 ? '-left-10' : '-right-10'}`} />
                                    </motion.div>

                                    {/* Content Column */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                        className={index % 2 === 1 ? 'lg:col-start-1' : ''}
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                                                <span className="font-serif font-bold text-xl">{index + 1}</span>
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">{product.title}</h3>
                                        </div>

                                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                            {product.description}
                                        </p>

                                        <div className="grid sm:grid-cols-2 gap-4">
                                            {product.items.map((item, i) => (
                                                <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                                                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                                    <span className="text-sm md:text-base text-foreground/80">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-10 md:mt-16">
                        <Button size="lg" className="text-lg md:text-xl px-6 md:px-8 py-5 md:py-6 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all" onClick={handleCheckoutRedirect}>
                            <Download className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                            Get Instant Access
                        </Button>
                    </div>
                </div>
            </section>

            {/* 6. Testimonials */}
            <section className="py-12 md:py-24 px-4 md:px-6 bg-muted/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10 md:mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-3 md:mb-4 px-2">
                            Real Results from Real Coaches
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground px-4">
                            See how coaches used this toolkit to launch their business
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                        <img
                            src="/images/testimonials-1.png"
                            alt="Real user reviews and results 1"
                            className="w-full rounded-xl shadow-lg border border-border"
                        />
                        <img
                            src="/images/testimonials-2.png"
                            alt="Real user reviews and results 2"
                            className="w-full rounded-xl shadow-lg border border-border"
                        />
                    </div>
                </div>
            </section>

            {/* 7. Bonuses Section */}
            <section className="py-12 md:py-24 px-4 md:px-6 bg-gradient-to-b from-background to-primary/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10 md:mb-16">
                        <Badge variant="secondary" className="mb-3 md:mb-4 text-sm md:text-base px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 text-primary border-none">
                            <Gift className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 inline" />
                            Exclusive Bonuses
                        </Badge>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-3 md:mb-4 px-2">
                            Get Started Right Away
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                            Everything you need to succeed included free - no guesswork, no confusion, just results
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="space-y-6 md:space-y-8">
                                <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group">
                                    <CardContent className="p-5 md:p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                                <PlayCircle className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl md:text-2xl font-serif font-bold mb-1">
                                                    CANVA TUTORIALS
                                                </h3>
                                                <p className="text-base md:text-base text-muted-foreground">
                                                    Step-by-step guides to help you customize your templates quickly
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group">
                                    <CardContent className="p-5 md:p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                                <FileText className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl md:text-2xl font-serif font-bold mb-1">
                                                    FULL SETUP INSTRUCTIONS
                                                </h3>
                                                <p className="text-base md:text-base text-muted-foreground">
                                                    Complete guide for using all the business forms and contracts
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group">
                                    <CardContent className="p-5 md:p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                                <Sparkles className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl md:text-2xl font-serif font-bold mb-1">
                                                    CHATGPT PROMPTS BONUS
                                                </h3>
                                                <p className="text-base md:text-base text-muted-foreground">
                                                    1,200 high-impact prompts for Health and Wellness Coaches included free
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        <div className="relative order-1 lg:order-2">
                            <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border-2 md:border-4 border-white">
                                <img
                                    src="/assets/healthcoaching/Instagram Templates .avif"
                                    alt="Bonus Content"
                                    className="w-full h-auto"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-10 md:mt-16">
                        <Button size="lg" className="text-lg md:text-xl px-6 md:px-8 py-5 md:py-6 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all" onClick={handleCheckoutRedirect}>
                            <Download className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                            Get Instant Access
                        </Button>
                    </div>
                </div>
            </section>

            {/* 8. How It Works */}
            <section className="py-12 md:py-24 px-4 md:px-6 bg-background">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-10 md:mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-3 md:mb-4 px-2">
                            How It Works
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground px-4">
                            Get started in minutes with instant digital access
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        {[
                            { step: "1", title: "Purchase", description: "Complete your secure checkout" },
                            { step: "2", title: "Download", description: "Get instant access to PDF with links" },
                            { step: "3", title: "Customize", description: "Edit in Canva (Free or Pro)" },
                            { step: "4", title: "Launch", description: "Start using your new assets" }
                        ].map((item, index) => (
                            <div key={index} className="text-center relative">
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl md:text-2xl font-serif font-bold mx-auto mb-3 md:mb-4 shadow-lg">
                                    {item.step}
                                </div>
                                <h3 className="text-base md:text-xl font-serif font-semibold mb-1.5 md:mb-2">{item.title}</h3>
                                <p className="text-sm md:text-base text-muted-foreground">{item.description}</p>
                                {index < 3 && (
                                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border -z-10" />
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 max-w-3xl mx-auto">
                        <img src="/assets/healthcoaching/How It Works.avif" alt="How it works visual guide" className="w-full h-auto rounded-xl shadow-lg border border-border" />
                    </div>

                    <div className="text-center mt-10 md:mt-16">
                        <Button size="lg" className="text-lg md:text-xl px-6 md:px-8 py-5 md:py-6 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all" onClick={handleCheckoutRedirect}>
                            <Download className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                            Get Instant Access
                        </Button>
                    </div>
                </div>
            </section>

            {/* 9. Final CTA (Pricing) */}
            <section className="py-12 md:py-24 px-4 md:px-6 bg-gradient-to-br from-primary/20 via-background to-secondary/20 relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold mb-4 md:mb-6 px-2">
                        Launch Your Business Today
                    </h2>
                    <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-4">
                        Join thousands of health and wellness coaches who have streamlined their branding with our comprehensive toolkit.
                    </p>

                    <Card className="border-2 md:border-4 border-primary/20 shadow-2xl mb-6 md:mb-8 bg-card">
                        <CardContent className="p-6 md:p-12">
                            <div className="mb-5 md:mb-6">
                                <div className="text-5xl md:text-6xl font-serif font-bold text-primary mb-2">{formatPrice(9)}</div>
                                <div className="text-sm md:text-base text-muted-foreground">One-time payment • Instant access</div>
                            </div>

                            <ul className="space-y-2.5 md:space-y-3 mb-6 md:mb-8 text-left max-w-md mx-auto">
                                <li className="flex items-center gap-2.5 md:gap-3">
                                    <Check className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" style={{ color: '#7F8D74' }} />
                                    <span className="text-sm md:text-base">2,000+ Canva Templates</span>
                                </li>
                                <li className="flex items-center gap-2.5 md:gap-3">
                                    <Check className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" style={{ color: '#7F8D74' }} />
                                    <span className="text-sm md:text-base">Fully Pre-Written Content</span>
                                </li>
                                <li className="flex items-center gap-2.5 md:gap-3">
                                    <Check className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" style={{ color: '#7F8D74' }} />
                                    <span className="text-sm md:text-base">Client Workbooks & Worksheets</span>
                                </li>
                                <li className="flex items-center gap-2.5 md:gap-3">
                                    <Check className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" style={{ color: '#7F8D74' }} />
                                    <span className="text-sm md:text-base">ChatGPT Prompts Bonus (1,200 prompts)</span>
                                </li>
                            </ul>

                            <Button size="lg" className="text-lg md:text-xl px-8 md:px-12 py-6 md:py-8 bg-[#6b7762] hover:bg-[#5a6554] text-white rounded-full shadow-xl hover:shadow-2xl transition-all max-w-md mx-auto" onClick={handleCheckoutRedirect}>
                                <Download className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                                Get Instant Access Now
                            </Button>

                            <p className="text-sm md:text-base text-muted-foreground mt-5 md:mt-6">
                                <Clock className="w-3 h-3 md:w-4 md:h-4 inline mr-1" />
                                Digital download • Instant access
                            </p>
                        </CardContent>
                    </Card>

                    <p className="text-sm md:text-base text-muted-foreground px-4">
                        This is a digital product for personal use only. No refunds on digital downloads.
                    </p>
                </div>
            </section>

            {/* 10. FAQ Section */}
            <section className="py-12 md:py-24 px-4 md:px-6 bg-card">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10 md:mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-3 md:mb-4 px-2">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground px-4">
                            Everything you need to know about the toolkit
                        </p>
                    </div>

                    <div className="space-y-3 md:space-y-4">
                        {faqs.map((faq, index) => (
                            <Card key={index} className="border-2 overflow-hidden">
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full p-4 md:p-6 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                                >
                                    <h3 className="text-lg md:text-xl font-semibold pr-3 md:pr-4">{faq.question}</h3>
                                    <ChevronDown
                                        className={`w-4 h-4 md:w-5 md:h-5 flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>
                                {openFaq === index && (
                                    <div className="px-4 md:px-6 pb-4 md:pb-6">
                                        <p className="text-base md:text-base text-muted-foreground leading-relaxed">{faq.answer}</p>
                                    </div>
                                )}
                            </Card>
                        ))}
                    </div>

                    <div className="text-center mt-10 md:mt-16">
                        <Button size="lg" className="text-lg md:text-xl px-6 md:px-8 py-5 md:py-6 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all" onClick={handleCheckoutRedirect}>
                            <Download className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                            Get Instant Access
                        </Button>
                    </div>
                </div>
            </section>

            {/* 11. Footer */}
            <footer className="py-8 md:py-12 px-4 md:px-6 bg-card border-t">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="mb-5 md:mb-6">
                        <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-1.5 md:mb-2">
                            Health Coaching Kit
                        </h3>
                        <p className="text-sm md:text-base text-muted-foreground">Empowering health and wellness coaches to build their dream business.</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-sm md:text-base text-muted-foreground mb-5 md:mb-6 px-4">
                        <a href="#" className="hover:text-foreground transition-colors">Contact Us</a>
                        <span className="hidden sm:inline">•</span>
                        <a href="#" className="hover:text-foreground transition-colors">Terms of Use</a>
                        <span className="hidden sm:inline">•</span>
                        <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
                    </div>

                    <p className="text-sm md:text-base text-muted-foreground">
                        © 2025 Health Coaching Kit. All rights reserved.
                    </p>
                </div>
            </footer>

            {/* Sticky Mobile Checkout Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t-2 border-primary/20 shadow-lg z-50 md:hidden">
                <div className="px-4 py-3 flex items-center justify-between gap-3">
                    <div className="flex-shrink-0">
                        <div className="text-2xl font-serif font-bold text-foreground">
                            {currency === "USD" && (
                                <span className="line-through text-muted-foreground text-lg mr-2">$297</span>
                            )}
                            {currency === "INR" && (
                                <span className="line-through text-muted-foreground text-lg mr-2">₹2,999</span>
                            )}
                            {formatPrice(9)} only
                        </div>
                    </div>
                    <Button size="lg" className="bg-[#6b7762] hover:bg-[#5a6554] text-white rounded-full shadow-lg text-base py-5 px-6" onClick={handleCheckoutRedirect}>
                        <Download className="w-4 h-4 mr-2" />
                        Get Access
                    </Button>
                </div>
            </div>
        </div>
    );
}