"use client";
import React from "react";
import { Media, MasonryGrid, Heading, Column } from "@once-ui-system/core";
import { gallery } from "@/resources";

export default function GalleryView() {
  const allCategories = Array.from(
    new Set(gallery.images.map((image) => image.category))
  ).sort((a, b) => {
    const priorityA = gallery.categoryPriority?.indexOf(a) ?? Infinity;
    const priorityB = gallery.categoryPriority?.indexOf(b) ?? Infinity;
    return priorityA - priorityB;
  });

  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      {allCategories.map((category, index) => (
        <Column fillWidth key={index}>
          <Heading
            as="h2"
            variant="heading-strong-xl"
            marginBottom="24"
            key={index}
          >
            {category}
          </Heading>

          <MasonryGrid columns={gallery.images.filter(image => image.category === category).length > 1 ? 2 : 1} s={{ columns: 1 }}>
            {gallery.images.filter(image => image.category === category).map((image, index) => (
              <Media
                enlarge
                priority={index < 10}
                sizes="(max-width: 560px) 100vw, 50vw"
                key={index}
                radius="m"
                unoptimized
                aspectRatio={
                  image.orientation === "horizontal" ? "16 / 9" : "3 / 4"
                }
                src={image.src}
                alt={image.alt}
                caption={image?.caption}
              />
            ))}
          </MasonryGrid>
        </Column>
      ))}
    </Column>
  );
}
