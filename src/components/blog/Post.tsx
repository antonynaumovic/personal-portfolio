"use client";

import React from "react";
import {
  Card,
  Column,
  Media,
  Row,
  Avatar,
  Text,
  AvatarGroup,
} from "@once-ui-system/core";
import { formatDate } from "@/utils/formatDate";
import { person } from "@/resources";

interface PostProps {
  post: any;
  thumbnail: boolean;
  direction?: "row" | "column";
  large?: boolean;
}

export default function Post({ post, thumbnail, direction, large }: PostProps) {
  const avatars =
    post.metadata.team?.map((person: { avatar: any }) => ({
      src: person.avatar,
    })) || [];

  const names =
    post.metadata.team?.map((person: { name: any }) => ({
      name: person.name,
    })) || [];

  const nameString = names.map((n: { name: string }) => n.name).join(", ");

  const hasTeam = post.metadata.team && post.metadata.team.length > 0;

  return (
    <Card
      fillWidth
      key={post.slug}
      href={`/blog/${post.slug}`}
      transition="micro-medium"
      direction={direction}
      border="transparent"
      background="transparent"
      padding="4"
      radius="l-4"
      gap={direction === "column" ? undefined : "24"}
      s={{ direction: "column" }}
    >
      {post.metadata.image && thumbnail && (
        <>
          {large && (
            <Column>
              <Media
                priority
                sizes="(max-width: 768px) 100vw, 640px"
                border="neutral-alpha-weak"
                cursor="interactive"
                radius="l"
                src={post.metadata.image}
                alt={"Thumbnail of " + post.metadata.title}
                aspectRatio="16 / 9"
                unoptimized
              />
            </Column>
          )}
          {!large && (
            <Media
              priority
              sizes="(max-width: 768px) 100vw, 640px"
              border="neutral-alpha-weak"
              cursor="interactive"
              radius="l"
              src={post.metadata.image}
              alt={"Thumbnail of " + post.metadata.title}
              aspectRatio="16 / 9"
              unoptimized
            />
          )}
        </>
      )}
      <Row fillWidth>
        <Column
          maxWidth={28}
          paddingY="24"
          paddingX="l"
          gap="20"
          vertical="center"
        >
          {hasTeam && (
            <Row gap="24" vertical="center" wrap>
              <>
                <AvatarGroup reverse avatars={avatars} size="s" />
                <Text variant="label-default-s">{nameString}</Text>
              </>

              {/* {!hasTeam &&
                <><Avatar src={person.avatar} size="s" /><Text variant="label-default-s">{person.name}</Text></>
              } */}

              {/* <Text variant="body-default-xs" onBackground="neutral-weak">
              {formatDate(post.metadata.publishedAt, false)}
            </Text> */}
            </Row>
          )}
          <Text variant="heading-strong-l" wrap="balance">
            {post.metadata.title}
          </Text>
          {post.metadata.tag && (
            <Text variant="label-strong-s" onBackground="neutral-weak">
              {post.metadata.tag}
            </Text>
          )}
        </Column>
      </Row>
    </Card>
  );
}
