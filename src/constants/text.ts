import { faFaceLaugh } from '@fortawesome/free-solid-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'

type Content = {
  title: string
  icon: IconDefinition
  texts: string[]
}

const CONTENT_LIST: Content[] = [
  {
    title: '概要',
    icon: faFaceLaugh,
    texts: [
      '月に1つ、今まで自分が経験しなかった、新しい何かをやってみて、報告するだけ！',
      'ハードルは低くてOK。ずっと気になっていたお店に入ってみる、気になってたスイーツを食べる、とか。',
      '第２・第４火曜 20:30～開催！ （※変更することがあります。connpassを確認してください）',
    ],
  },
  {
    title: 'Discordでのオンラインミーティングについて',
    icon: faDiscord,
    texts: [
      'Discordで開催しています（connpassで申し込みするとリンクが見れるようになります）',
      '1回の会は30分～40分',
      'カメラはOFFでＯＫ！',
    ],
  },
  {
    title: '概要',
    icon: faFaceLaugh,
    texts: [
      '月に1つ、今まで自分が経験しなかった、新しい何かをやってみて、報告するだけ！',
      'ハードルは低くてOK。ずっと気になっていたお店に入ってみる、気になってたスイーツを食べる、とか。',
    ],
  },
  {
    title: '概要',
    icon: faFaceLaugh,
    texts: [
      '月に1つ、今まで自分が経験しなかった、新しい何かをやってみて、報告するだけ！',
      'ハードルは低くてOK。ずっと気になっていたお店に入ってみる、気になってたスイーツを食べる、とか。',
    ],
  },
  {
    title: '概要',
    icon: faFaceLaugh,
    texts: [
      '月に1つ、今まで自分が経験しなかった、新しい何かをやってみて、報告するだけ！',
      'ハードルは低くてOK。ずっと気になっていたお店に入ってみる、気になってたスイーツを食べる、とか。',
    ],
  },
  {
    title: '概要',
    icon: faFaceLaugh,
    texts: [
      '月に1つ、今まで自分が経験しなかった、新しい何かをやってみて、報告するだけ！',
      'ハードルは低くてOK。ずっと気になっていたお店に入ってみる、気になってたスイーツを食べる、とか。',
    ],
  },
]
