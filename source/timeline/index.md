---
date: "2026-06-30T19:12:09+08:00"
title: 时间线
updated: "2026-08-22T21:17:17.799+08:00"
---
{% tabs %}

 <!-- tab 个人时间线 -->

 ## 更多内容尚待完善~

 <!-- tab 博客时间线 -->

 {% tabs %}

  <!-- tab 大事年表 -->

  {% raw %}
    <div id="blogChronicleTimeline">
      <el-timeline>
        <el-timeline-item 
        v-for="(activity, i) in activities"
        :key="i"
        :timestamp="activity.timestamp"
        placement="top"
        center="true">
          <span v-text="activity.content" style="color: var(--first-text-color);"></span>
        </el-timeline-item>
      </el-timeline>
    </div>
  {% endraw %}

  <!-- tab GitHub提交 -->

  ## 更多内容尚待完善~

 {% endtabs %}

{% endtabs %}

<script>
  const { createApp, ref } = Vue;
  const blogChronicleTimeline = createApp({
    setup() {
      const activities = ref([
        {
          content: "开始使用Hexo作为博客框架",
          timestamp: "2026-7-17"
        },
        {
          content: "GitHub博客仓库创建",
          timestamp: "2025-7-8"
        }
      ]);
      return { activities };
    }
  })

  blogChronicleTimeline.use(ElementPlus);
  blogChronicleTimeline.mount("#blogChronicleTimeline");
</script>