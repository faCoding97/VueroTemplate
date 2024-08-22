<script setup lang="ts">
import { useGenericLine } from '/@src/data/dashboards/billboardjs-demo/genericLine'
import { useRegionLine } from '/@src/data/dashboards/billboardjs-demo/regionLine'
import { useAreaSimpleChart } from '/@src/data/dashboards/billboardjs-demo/areaSimple'
import { useAreaLineRangeChart } from '/@src/data/dashboards/billboardjs-demo/areaLineRange'
import { useBarSimple } from '/@src/data/dashboards/billboardjs-demo/barSimple'
import { useBarStacked } from '/@src/data/dashboards/billboardjs-demo/barStacked'
import { useStepSimpleChart } from '/@src/data/dashboards/billboardjs-demo/stepSimple'
import { useSplineSimple } from '/@src/data/dashboards/billboardjs-demo/splineSimple'
import { useBubbleSimple } from '/@src/data/dashboards/billboardjs-demo/bubbleSimple'
import { useScatterSimple } from '/@src/data/dashboards/billboardjs-demo/scatterSimple'
import { usePieSimple } from '/@src/data/dashboards/billboardjs-demo/pieSimple'
import { useDonutSimple } from '/@src/data/dashboards/billboardjs-demo/donutSimple'
import { useGaugeSimple } from '/@src/data/dashboards/billboardjs-demo/gaugeSimple'
import { useRadarSimple } from '/@src/data/dashboards/billboardjs-demo/radarSimple'

const genericLine = reactive(useGenericLine())
const regionLine = reactive(useRegionLine())
const areaSimple = reactive(useAreaSimpleChart())
const areaLineRange = reactive(useAreaLineRangeChart())
const barSimple = reactive(useBarSimple())
const barStacked = reactive(useBarStacked())
const stepSimple = reactive(useStepSimpleChart())
const splineSimple = reactive(useSplineSimple())
const bubbleSimple = reactive(useBubbleSimple())
const scatterSimple = reactive(useScatterSimple())
const pieSimple = reactive(usePieSimple())
const donutSimple = reactive(useDonutSimple())
const gaugeSimple = reactive(useGaugeSimple())
const radarSimple = reactive(useRadarSimple())
</script>

<template>
  <div class="columns is-multiline">
    <div class="column is-6">
      <div class="s-card">
        <VBillboardJS dir="ltr"
          :options="genericLine.options"
          @ready="genericLine.onReady"
        />
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <VBillboardJS dir="ltr" :options="regionLine.options" />
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <VBillboardJS dir="ltr" :options="areaSimple.options" />
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <VBillboardJS dir="ltr"
          :options="areaLineRange.options"
          @ready="areaLineRange.onReady"
        />
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <VBillboardJS dir="ltr"
          :options="barSimple.options"
          @ready="barSimple.onReady"
        />
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <VBillboardJS dir="ltr"
          :options="barStacked.options"
          @ready="barStacked.onReady"
        />
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <VBillboardJS dir="ltr" :options="stepSimple.options" />
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <VBillboardJS dir="ltr" :options="splineSimple.options" />
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <VBillboardJS dir="ltr"
          :options="bubbleSimple.options"
          @ready="bubbleSimple.onReady"
        />
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <VBillboardJS dir="ltr"
          :options="scatterSimple.options"
          @ready="scatterSimple.onReady"
        />
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <VBillboardJS dir="ltr"
          :options="pieSimple.options"
          @ready="pieSimple.onReady"
        />
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <VBillboardJS dir="ltr"
          :options="donutSimple.options"
          @ready="donutSimple.onReady"
        />
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <VBillboardJS dir="ltr"
          :options="gaugeSimple.options"
          @ready="gaugeSimple.onReady"
        />
      </div>
    </div>
    <div class="column is-6">
      <div class="s-card">
        <VBillboardJS dir="ltr" :options="radarSimple.options" />
      </div>
    </div>
  </div>
</template>
