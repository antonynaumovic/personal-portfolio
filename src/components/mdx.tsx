import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import React from "react";
import type { ReactNode } from "react";
import { slugify as transliterate } from "transliteration";
import ReactPlayer from "react-player";
import { YouTubeEmbed } from "@next/third-parties/google";

import {
  Heading,
  HeadingLink,
  Text,
  InlineCode,
  CodeBlock,
  type TextProps,
  type MediaProps,
  type Colors,
  Accordion,
  AccordionGroup,
  Table,
  Feedback,
  Button,
  Card,
  Grid,
  Row,
  Column,
  Icon,
  Media,
  SmartLink,
  List,
  ListItem,
  Line,
  Swiper,
  Scroller,
  MasonryGrid,
} from "@once-ui-system/core";

type CustomLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

function CustomLink({ href, children, ...props }: CustomLinkProps) {
  if (href.startsWith("/")) {
    return (
      <SmartLink href={href} {...props}>
        {children}
      </SmartLink>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}

function ExternalLink({
  href,
  ...props
}: CustomLinkProps & { title: string; fillWidth?: boolean }) {
  if (props.fillWidth) {
    return (
      <SmartLink
        href={href}
        {...props}
        target="_blank"
        rel="noopener noreferrer"
        fillWidth={props.fillWidth}
      >
        <Row
          fillWidth={props.fillWidth}
          background="surface"
          border="surface"
          radius="l"
          padding="16"
          horizontal="between"
          vertical="center"
        >
          <Row vertical="center">
            <Icon name="link" paddingRight="8" />
            <Text>{props.title}</Text>
          </Row>
          <Icon name="chevronRight" />
        </Row>
      </SmartLink>
    );
  }
  return (
    <SmartLink
      href={href}
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      prefixIcon="link"
    >
      {props.title}
    </SmartLink>
  );
}

function createImage({ alt, src, ...props }: MediaProps & { src: string }) {
  if (!src) {
    console.error("Media requires a valid 'src' property.");
    return null;
  }

  return (
    <Media
      marginTop="8"
      marginBottom="16"
      enlarge
      radius="m"
      border="neutral-alpha-medium"
      sizes="(max-width: 960px) 100vw, 960px"
      alt={alt}
      src={src}
      {...props}
    />
  );
}

function createMedia({
  alt,
  src,
  row = false,
  ...props
}: MediaProps & { src: string; row?: number | boolean }) {
  if (!src) {
    console.error("Media requires a valid 'src' property.");
    return null;
  }

  return (
    <>
      {!row && (
        <Media
          marginTop="8"
          marginBottom="16"
          enlarge
          radius="m"
          border="neutral-alpha-medium"
          sizes="(max-width: 960px) 100vw, 960px"
          unoptimized
          alt={alt}
          src={src}
          {...props}
        />
      )}
      {row && (
        <Row gap="16" center>
          <Column>
            <Media
              marginTop="8"
              marginBottom="16"
              enlarge
              radius="m"
              border="neutral-alpha-medium"
              sizes="(max-width: 960px) 100vw, 960px"
              unoptimized
              alt={alt}
              src={src}
              maxWidth={row === true ? undefined : row}
              {...props}
            />
          </Column>
        </Row>
      )}
    </>
  );
}

function createGridMedia({
  src,
  orientation = "horizontal",
  ...props
}: MediaProps & { src: string; orientation?: "horizontal" | "vertical" }) {
  if (!src) {
    console.error("Media requires a valid 'src' property.");
    return null;
  }

  return (
    <Media
      enlarge
      sizes="(max-width: 560px) 100vw, 50vw"
      radius="m"
      unoptimized
      aspectRatio={orientation === "horizontal" ? "16 / 9" : "3 / 4"}
      key={src}
      alt={props?.title + " Image"}
      src={src}
      {...props}
    />
  );
}

function slugify(str: string): string {
  const strWithAnd = str.replace(/&/g, " and "); // Replace & with 'and'
  return transliterate(strWithAnd, {
    lowercase: true,
    separator: "-", // Replace spaces with -
  }).replace(/--+/g, "-"); // Replace multiple - with single -
}

function createHeading(as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6") {
  const CustomHeading = ({
    children,
    ...props
  }: Omit<React.ComponentProps<typeof HeadingLink>, "as" | "id">) => {
    const slug = slugify(children as string);
    return (
      <HeadingLink
        marginTop="24"
        marginBottom="12"
        as={as}
        id={slug}
        {...props}
      >
        {children}
      </HeadingLink>
    );
  };

  CustomHeading.displayName = `${as}`;

  return CustomHeading;
}

function createParagraph({ children }: TextProps) {
  return (
    <Text
      style={{ lineHeight: "175%" }}
      variant="body-default-m"
      onBackground="neutral-medium"
      marginTop="8"
      marginBottom="12"
    >
      {children}
    </Text>
  );
}

function createHighlight({
  children,
  strength,
}: TextProps & { strength?: number }) {
  const strengthColourMap: Colors[] = [
    "neutral-strong",
    "brand-medium",
    "brand-weak",
  ];

  return (
    <Text
      onBackground={
        strengthColourMap[
          Math.min(Math.max(strength ?? 0, 0), strengthColourMap.length - 1)
        ]
      }
      weight="strong"
    >
      {children}
    </Text>
  );
}

function createInlineCode({ children }: { children: ReactNode }) {
  return <InlineCode>{children}</InlineCode>;
}

function createCodeBlock(props: any) {
  // For pre tags that contain code blocks
  if (props.children?.props?.className) {
    const { className, children } = props.children.props;

    // Extract language from className (format: language-xxx)
    const language = className.replace("language-", "");
    const label = language.charAt(0).toUpperCase() + language.slice(1);

    return (
      <CodeBlock
        marginTop="8"
        marginBottom="16"
        codes={[
          {
            code: children,
            language,
            label,
          },
        ]}
        copyButton={true}
      />
    );
  }

  // Fallback for other pre tags or empty code blocks
  return <pre {...props} />;
}

function createList({ children }: { children: ReactNode }) {
  return <List>{children}</List>;
}

function createListItem({ children }: { children: ReactNode }) {
  return (
    <ListItem marginTop="4" marginBottom="8" style={{ lineHeight: "175%" }}>
      {children}
    </ListItem>
  );
}

function createHR() {
  return (
    <Row fillWidth horizontal="center">
      <Line maxWidth="40" />
    </Row>
  );
}

const components = {
  p: createParagraph as any,
  h1: createHeading("h1") as any,
  h2: createHeading("h2") as any,
  h3: createHeading("h3") as any,
  h4: createHeading("h4") as any,
  h5: createHeading("h5") as any,
  h6: createHeading("h6") as any,
  img: createImage as any,
  a: CustomLink as any,
  code: createInlineCode as any,
  pre: createCodeBlock as any,
  ol: createList as any,
  ul: createList as any,
  li: createListItem as any,
  hr: createHR as any,
  ReactPlayer,
  YouTubeEmbed,
  Heading,
  Text,
  CodeBlock,
  InlineCode,
  Accordion,
  AccordionGroup,
  Table,
  Feedback,
  Button,
  Card,
  Grid,
  Row,
  Column,
  Icon,
  Media,
  M: createMedia as any,
  ExternalLink: ExternalLink as any,
  SmartLink,
  Swiper,
  Scroller,
  Hi: createHighlight as any,
  MasonryGrid,
  MGM: createGridMedia as any,
};

type CustomMDXProps = MDXRemoteProps & {
  components?: typeof components;
};

export function CustomMDX(props: CustomMDXProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
