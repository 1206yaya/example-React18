import { useEffect, useState } from "react";
/**
 * React18 ではuseEffectが複数回呼ばれるようになった。
 * これは正しく実装されていないコンポーネントをあぶり出すための開発モードならではの機能
 */
export default function App() {
  useEffect(() => {
    console.log("call");
  }, []);
  return <br />;
}
