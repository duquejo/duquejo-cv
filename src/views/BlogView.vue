<template>
  <article>
    <section>
      <h1 class="text-h1">Blog</h1>
    </section>
    <section>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste debitis, ut error unde dicta nobis assumenda
        alias, voluptas porro, quidem quae a ea sit repudiandae quod illum incidunt tempora. Incidunt rem dolor
        consequatur nihil porro numquam, corrupti laborum cum nam eum sed odit eos odio, necessitatibus quas officia quia
        pariatur?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perferendis deserunt aut non esse modi vero
        voluptatum, architecto adipisci, ex ipsum cum expedita odio provident! Nemo, blanditiis corrupti iure ipsa quasi
        laboriosam, perspiciatis accusamus repellat repellendus tenetur debitis autem dicta, officiis voluptates. Impedit
        modi ab adipisci odit enim debitis deleniti perspiciatis harum tempore magni quidem ducimus, nisi unde asperiores,
        voluptatibus distinctio. Vel, tempore quis delectus ducimus iure aperiam optio veritatis quibusdam quas quaerat
        eos eum at impedit vitae recusandae modi animi. Quos, dolorum dicta vel eaque, sit ab aperiam, debitis temporibus
        architecto alias maiores voluptate nisi esse culpa aliquam enim.
      </p>
    </section>
    <section class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <BCardComponent />
    </section>
  </article>
</template>

<script setup lang="ts">
import BCardComponent from '@/components/blog-card/BCardComponent.vue';
</script>