import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BrandProductVisual } from "@/components/brand-visuals";
import { blogs } from "@/lib/data";

type BlogPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export function generateMetadata({ params }: BlogPageProps): Metadata {
  const blog = blogs.find((item) => item.slug === params.slug);
  if (!blog) return {};
  return {
    title: blog.title,
    description: blog.excerpt,
    openGraph: { title: blog.title, description: blog.excerpt }
  };
}

export default function BlogPage({ params }: BlogPageProps) {
  const blog = blogs.find((item) => item.slug === params.slug);
  if (!blog) notFound();

  return (
    <main className="bg-ivory px-6 pb-24 pt-32 text-charcoal dark:bg-charcoal dark:text-ivory">
      <article className="mx-auto max-w-4xl">
        <Link href="/#journal" className="text-sm font-semibold text-maroon dark:text-gold">
          Back to journal
        </Link>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.35em] text-maroon dark:text-gold">
          {blog.category} · {blog.readTime}
        </p>
        <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight md:text-7xl">{blog.title}</h1>
        <p className="mt-5 text-xl leading-8 text-charcoal/65 dark:text-white/65">{blog.excerpt}</p>
        <BrandProductVisual
          title={blog.category}
          subtitle="Prabhukul Journal"
          tone={blog.tone as "green" | "maroon" | "gold"}
          className="mt-10 min-h-[360px] shadow-glass"
        />
        <div className="prose prose-lg mt-10 max-w-none dark:prose-invert">
          <p>{blog.body}</p>
          <p>
            At Prabhukul, we treat Ayurveda as a living practice. The goal is not to overwhelm your shelf, but to help you choose
            a few rituals that feel consistent, beautiful and rooted.
          </p>
        </div>
      </article>
    </main>
  );
}
