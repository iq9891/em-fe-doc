export default {
  base: `
<emfe-row>
  <emfe-col span="8">
    <div class="grid-blue">col-8</div>
  </emfe-col>
  <emfe-col span="8">
    <div class="grid-lightblue">col-8</div>
  </emfe-col>
  <emfe-col span="8">
    <div class="grid-blue">col-8</div>
  </emfe-col>
</emfe-row>`,
  interval: `
<emfe-row :gutter="16">
  <emfe-col span="12">
    <div class="grid-blue">col-12</div>
  </emfe-col>
  <emfe-col span="12">
    <div class="grid-lightblue">col-12</div>
  </emfe-col>
</emfe-row>`,
  order: `
<emfe-row>
  <emfe-col span="6" order="4">
    <div class="grid-blue">1 | order-4</div>
  </emfe-col>
  <emfe-col span="6" order="3">
    <div class="grid-lightblue">2 | order-3</div>
  </emfe-col>
  <emfe-col span="6" order="2">
    <div class="grid-blue">3 | order-2</div>
  </emfe-col>
  <emfe-col span="6" order="1">
    <div class="grid-lightblue">4 | order-1</div>
  </emfe-col>
</emfe-row>`,
  flex: `
<emfe-row type="flex">
  <emfe-col span="12">
    <div class="grid-blue">col-12</div>
  </emfe-col>
  <emfe-col span="12">
    <div class="grid-lightblue">col-12</div>
  </emfe-col>
</emfe-row>`,
  sort: `
<emfe-row>
  <emfe-col span="18" pull="6">
    <div class="grid-blue">col-18 | pull-6</div>
  </emfe-col>
  <emfe-col span="6" push="18">
    <div class="grid-lightblue">col-6 | push-18</div>
  </emfe-col>
</emfe-row>`,
  deviation: `
<emfe-row>
  <emfe-col span="6" offset="8">
    <div class="grid-blue">col-6 | offset-8</div>
  </emfe-col>
  <emfe-col span="6" offset="4">
    <div class="grid-lightblue">col-6 | offset-4</div>
  </emfe-col>
</emfe-row>`,
  array: `
<emfe-row type="flex" justify="start" align="top">
  <emfe-col span="4">
    <p class="grid-blue">col-4</p>
  </emfe-col>
  <emfe-col span="4">
    <p class="grid-lightblue">col-4</p>
  </emfe-col>
  <emfe-col span="4">
    <p class="grid-blue">col-4</p>
  </emfe-col>
  <emfe-col span="4">
    <p class="grid-lightblue">col-4</p>
  </emfe-col>
</emfe-row>`,
  response: `
<emfe-row>
  <emfe-col :xl="2" :lg="4" :md="6" :xs="12" span="24">
    <div class="grid-blue">col-1</div>
  </emfe-col>
  <emfe-col :xl="2" :lg="4" :md="6" :xs="12" span="24">
    <div class="grid-lightblue">col-2</div>
  </emfe-col>
  <emfe-col :xl="2" :lg="4" :md="6" :xs="12" span="24">
    <div class="grid-blue">col-3</div>
  </emfe-col>
  <emfe-col :xl="2" :lg="4" :md="6" :xs="12" span="24">
    <div class="grid-lightblue">col-4</div>
    </emfe-col>
</emfe-row>`,
  other: `
<emfe-row>
  <emfe-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">
    <div class="grid-blue">col</div>
  </emfe-col>
  <emfe-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">
    <div class="grid-lightblue">col</div>
  </emfe-col>
  <emfe-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">
    <div class="grid-blue">col</div>
  </emfe-col>
</emfe-row>`,
};
