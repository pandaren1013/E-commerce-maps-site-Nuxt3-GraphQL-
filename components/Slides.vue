<template>
  <vueper-slides
    :dragging-distance="50"
    :arrows-outside="false"
    :visible-slides="2"
    :gap="2"
    :slide-ratio="1 / 3"
    :breakpoints="{ 800: { visibleSlides: 1, slideMultiple: 1 } }"
    fixed-height="264px"
    :autoplay="true"
    :bullets="true"
  >
    <vueper-slide
      class="!w-[478px] !h-[264px]"
      v-for="(slide, i) in slides"
      :key="i"
      :arrows-outside="false"
      :arrows="true"
      :image="slide.image"
    />
  </vueper-slides>
</template>
<script lang="ts" setup>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import fishing from "@/assets/images/temp/fishing-map.png";
import outdoors from "@/assets/images/temp/all-outdoors.png";
import interactive from "@/assets/images/temp/interactive.png";
const slides = [
  {
    image: fishing,
  },
  {
    image: outdoors,
  },
  {
    image: interactive,
  },
];
</script>
