# NPAPI 筆記

## 執行期模型

*  當 plug-in 第一次被載入時，會呼叫 `NP_initialize`
*  plugin-in 會呼叫 NPP_New 產生一個實體，同一個 plug-in 可以產生多個實體（可能在頁面上有多個內嵌標籤，或者多個接收特定 MIME type 的視窗），關掉時則會呼叫 `NPP_Destroy`，而當最後一個實體被關掉之後，plug-in 會呼叫 NP_Shutdown 釋放記憶體。