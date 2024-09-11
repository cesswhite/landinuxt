<template>
    <main class="min-h-screen">
        <ContentDoc v-slot="{ doc }" tag="article">
            <article>
                <h1>{{ doc.title }}</h1>
                <ContentRenderer :value="doc" />
            </article>
        </ContentDoc>
        <div>

        </div>
    </main>
</template>
<script setup>
const route = useRoute();
const { slug } = route.params;
useSeoMeta({
    ogImage: ``,
    twitterCard: "",
    articleAuthor: "",
});
</script>
