<template>
    <ContentList path="/headers" v-slot="{ list }">
        <template v-for="item in list" :key="item._path">
            <pre>
            {{ item }}
            </pre>
        </template>

        <!--    <ContentQuery v-for="item in list" :key="item._path" :path="item._path" find="one" v-slot="{ data }">

            <ContentRenderer>
                <ContentRendererMarkdown :value="data" />
            </ContentRenderer>
        </ContentQuery>
 -->
    </ContentList>
</template>