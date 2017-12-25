export default {
  base: `
  <template>
    <emfe-table :columns="columnBase" :data="dataBase" :border="true">
      <emfe-table-head slot="head">
      </emfe-table-head>
      <emfe-table-body slot="body" v-for="(dataList,index) in dataBase" :ind="index" :key="index" :data-list="dataList">
      </emfe-table-body>
    </emfe-table>
  </template>
  <script>
    export default {
      data() {
        return {
          columnBase: [
            {
              title: '标题',
              key: 'name',
            },
            {
              title: '地址',
              key: 'place',
            },
          ],
          dataBase: [
            {
              name: { text: '李阳光', row: false, color: '#fd883b' },
              place: { text: '帝都', row: false, color: '#1996f9' },
            },
            {
              name: { text: '<a href="javascript:;">李红星</a>', row: false },
              place: { text: '帝都', row: true, color: '#1996f9' },
            },
            {
              name: { text: '<a href="javascript:;">李红星</a>', row: false },
              place: { text: '', hebing: true, row: true },
            },
          ],
        };
      },
    },
  </script>`,
  hover: `
<template>
  <emfe-table :columns="columnHover" :data="dataHover" :hover="true">
    <emfe-table-head slot="head">
    </emfe-table-head>
    <emfe-table-body slot="body" v-for="(dataList,index) in dataHover" :ind="index" :key="index" :data-list="dataList">
    </emfe-table-body>
  </emfe-table>
</template>
<script>
  export default {
    data() {
      return {
        columnHover: [
          {
            title: '标题',
            key: 'name',
          },
          {
            title: '地址',
            key: 'place',
          },
        ],
        dataHover: [
          {
            name: { text: '李阳光', row: false },
            place: { text: '帝都', row: false },
          },
          {
            name: { text: '李红星', row: false },
            place: { text: '帝都', row: false },
            disabled: true,
          },
        ],
      };
    },
  },
</script>`,
  auto: `
<template>
  <div style="width: 100%; overflow: auto;">
    <emfe-table :columns="columnAuto" :data="dataAuto">
      <emfe-table-head slot="head">
      </emfe-table-head>
      <emfe-table-body slot="body" v-for="(dataList,index) in dataAuto" :ind="index" :key="index" :data-list="dataList">
      </emfe-table-body>
    </emfe-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      columnAuto: [
        {
          title: '姓名',
          key: 'name',
        },
        {
          title: '地址',
          key: 'place',
        },
        {
          title: '年龄',
          key: 'age',
        },
        {
          title: '性别',
          key: 'sex',
        },
        {
          title: '婚姻情况',
          key: 'marriage',
        },
        {
          title: '婚姻情况',
          key: 'marriage',
        },
        {
          title: '爱好',
          key: 'hobby',
        },
        {
          title: '学历',
          key: 'education',
        },
        {
          title: '肤色',
          key: 'skin',
        },
      ],
      dataAuto: [
        {
          name: { text: '李红星', row: false },
          place: { text: '帝都某 SOHO 的某座的某层的某房间', row: false },
          age: { text: 3, row: false },
          sex: { text: '男', row: false },
          marriage: { text: '未婚', row: false },
          hobby: { text: '撩妹，抽烟，喝酒', row: false },
          education: { text: '幼儿园', row: false },
          skin: { text: '蜡黄色', row: false },
        },
      ],
    };
  },
},
</script>`,
  slot: `
<template>
  <emfe-table :columns="columnSlot" :data="dataSlot">
    <emfe-table-head slot="head">
    </emfe-table-head>
    <emfe-table-body slot="body" v-for="(dataList,index) in dataSlot" :ind="index" :key="index" :data-list="dataList">
      <div slot="a">
        <emfe-checkout title="多选"></emfe-checkout>
      </div>
      <div slot="b">EM-FE</div>
      <div slot="c">
        <emfe-button>按钮</emfe-button>
      </div>
    </emfe-table-body>
  </emfe-table>
</template>
<script>
export default {
data() {
  return {
    columnSlot: [
      {
        title: '姓名',
        key: 'name',
      },
      {
        title: '操作',
        key: 'place',
      },
    ],
    dataSlot: [
      {
        name: { text: '李黄河', row: false },
        place: { slot: 'a', row: false },
      },
      {
        name: { text: '李无敌', row: false },
        place: { slot: 'b', row: false },
      },
      {
        name: { text: '李红星', row: false },
        place: { slot: 'c', row: false },
      },
    ],
  };
},
},
</script>`,
  no: `
<template>
  <emfe-table :columns="columnNo" :data="dataNo" nothing-text="无数据">
    <emfe-table-head slot="head">
    </emfe-table-head>
    <emfe-table-body slot="body" v-for="(dataList,index) in dataNo" :ind="index" :key="index" :data-list="dataList">
    </emfe-table-body>
  </emfe-table>
</template>
<script>
export default {
data() {
  return {
    columnNo: [
      {
        title: '姓名',
        key: 'name',
      },
      {
        title: '地址',
        key: 'place',
      },
      {
        title: '年龄',
        key: 'age',
      },
      {
        title: '性别',
        key: 'sex',
      },
      {
        title: '婚姻情况',
        key: 'marriage',
      },
      {
        title: '婚姻情况',
        key: 'marriage',
      },
      {
        title: '爱好',
        key: 'hobby',
      },
      {
        title: '学历',
        key: 'education',
      },
      {
        title: '肤色',
        key: 'skin',
      },
    ],
    dataNo: [],
  };
},
},
</script>`,
  checked: `
<template>
  <emfe-table :columns="columnChecked" :data="dataChecked">
    <emfe-table-head slot="head" :checked="1">
    </emfe-table-head>
    <emfe-table-body slot="body" v-for="(dataList,index) in dataChecked" :ind="index" :key="index" :data-list="dataList" :checked="1">
    </emfe-table-body>
  </emfe-table>
</template>
<script>
export default {
data() {
  return {
    columnChecked: [
      {
        title: '标题',
        key: 'name',
      },
      {
        title: '地址',
        key: 'place',
      },
    ],
    dataChecked: [
      {
        name: { text: '李千年', row: false },
        place: { text: '帝都', row: false },
      },
      {
        name: { text: '李红星', row: false },
        place: { text: '帝都', row: true },
      },
    ],
  };
},
},
</script>`,
};
