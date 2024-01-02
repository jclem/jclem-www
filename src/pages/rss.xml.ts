import rss from '@astrojs/rss'
import { assert } from '@jclem/assert'
import type { APIRoute } from 'astro'
import { getPublishedWriting } from '../content/config'

const posts = await getPublishedWriting()

export const GET = (async ctx => rss({
	title: "jclem.me",
	description: "Personal blog of Jonathan Clem",
	site: assert(ctx.site),
	items: await Promise.all(posts.map(async post => ({
		link: `/writing/${post.slug}`,
		title: post.data.title,
		pubDate: assert(post.data.publishedAt),
		description: post.data.summary,
	})))
})) satisfies APIRoute