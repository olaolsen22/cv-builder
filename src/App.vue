<template lang="pug">
.main-page
  .left-panel
    ImageSection(:imageLink='imageUrl')
    .section
      p.section-heading(v-html='leftPanelText.firstSection.title')
      p.section-content(v-html='leftPanelText.firstSection.content')
    .section
      p.section-heading(v-html='leftPanelText.secondSection.title')
      HardSkills(:skills='leftPanelText.secondSection.content')
    .section
      p.section-heading(v-html='leftPanelText.thirdSection.title')
      p.section-content(v-html='leftPanelText.thirdSection.content')
  .right-panel
    MainHeader(
      name='Ola Olsen',
      jobTitle='Software Engineer',
      :phone='["+63 939 904 4276", "+63 905 272 0731"]',
      email='olaolsen22@gmail.com',
      :address='{ address: "46-22 Don Rosauro St. Brgy. Pulung Maragul, Angeles, Pampanga 2009, Philippines",  link: "https://goo.gl/maps/FrSB8m5XLQ4Xq7F88"}',
      linkedIn='ola-olsen-442b07a3'
    )
    .main-sections(v-for='section in mainSectionContent')
      p.main-section-header {{section.title}}
      MainSection(
        v-for='sectionContent in section.content'
        :data='sectionContent'
      )

    

</template>

<script>

// Components
import ImageSection from '@/components/image-section.vue'
import HardSkills from '@/components/hard-skills.vue'
import MainHeader from '@/components/main-header.vue'
import MainSection from '@/components/main-section.vue'
// Mock Data
import leftPanelText from '@/mockData/left-panel.json'
import mainSectionContent from '@/mockData/main-section-content.json'

export default {
  name: 'App',
  components: {
    ImageSection,
    HardSkills,
    MainHeader,
    MainSection
  },
  data () {
    return {
      imageUrl: 'my_image.jpg',
      leftPanelText: leftPanelText,
      mainSectionContent
    }
  }
}
</script>

<style lang="scss">
@import './assets/styles/main.scss';
.main-section-header {
  font-size: 14pt;
  color: $primary-color;
  border-bottom: 1pt solid $primary-color;
  padding: .35rem;
  padding-top: 0;
  margin: 0;
}
.main-sections {
  // margin-bottom: 1rem;
  padding: .75rem;
}
.main-page {
  display: flex;
  min-width: 8.5in;
  max-width: 8.5in;
  min-height: 11in;
  max-height: 11in;
  background-color: #ffffff;
  outline: 1px solid red;
  .left-panel {
    display: flex;
    padding: 1.25rem;
    flex-direction: column;
    align-items: center;
    min-height: 100%;    
    min-width: 2.25in;
    max-width: 2.25in;
    background-color: #303030;
    color: #ffffff;
    .section {
      width: 100%;
      .section-heading {
        font-size: 14pt;
        color: $primary-color;
      }
      .section-content {
        white-space: break-spaces;
      }
    }
  }
  .right-panel {
    width: 100%;
  }
}

</style>
