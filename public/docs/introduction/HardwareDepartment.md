# 关于硬件部

## 部门介绍

三院科协硬件部，是科协的三大技术部门之一。

> Building......

## 嵌入式

```java
public class MainActivity extends Activity {
    TextView air_temperature;//温度
    TextView air_humidity;//湿度
    TextView air_smoke;//烟雾
    TextView air_carbon;//一氧化碳

    private static String DeviceID ="584160273";//设备ID
    private static String ApiKey = "NlkAlp0buwYCSbyc8=A5MnvJIRw=";//密钥
    private static final String url_g="http://api.heclouds.com/devices/" + DeviceID + "/datapoints";

    String string="";
    int count = 4;//获取数据的数量
    String[] array=new String[count];


    private Handler mainHandle = new Handler(Looper.getMainLooper());
    private Thread networkThread = new Thread(){
        @Override
        public void run() {
            super.run();
            while (true) {
                try {
                    Get();
                    Thread.sleep(3000);
                }catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }
    };


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.air_info);

        air_temperature=findViewById(R.id.temperature);//温度
        air_carbon=findViewById(R.id.carbon);//co
        air_smoke=findViewById(R.id.smoke);//烟雾
        air_humidity=findViewById(R.id.humidity);//湿度

        networkThread.start();
    }

    public void Get() {
        final String[] a=new String[4];
            try {
                OkHttpClient client = new OkHttpClient();
                Request request = new Request.Builder().url(url_g)
                                                        .header("api-key", ApiKey)
                                                        .build();
                Response response = client.newCall(request).execute();
                String responseData = response.body().string();
                parseJSONWithGSON(responseData);
            } catch (IOException e) {
                e.printStackTrace();
            }
    }

    private void parseJSONWithGSON(String jsonData) {

        JsonRootBean app = new Gson().fromJson(jsonData, JsonRootBean.class);
        List<Datastreams> streams = app.getData().getDatastreams();
        //获取数据流名称
        for (int j=0;j<streams.size();j++){
            String id = streams.get(j).getId();
            Log.w("id","id="+id);
            String toValue = null; //承接value值
            List<Datapoints> points = streams.get(j).getDatapoints();
            for (int i = 0; i < points.size(); i++) {
                String time = points.get(i).getAt();
                String value = points.get(i).getValue();
                Log.w("tag","time="+time);
                Log.w("tag","value="+value);
                Log.w("tag","string="+count);
                toValue=value;
            }
            array[j]=toValue;
        }
        mainHandle.post(new Runnable() {
            @Override
            public void run() {
                //UI更新
                air_carbon.setText(array[0]);
                air_temperature.setText(array[1]);
                air_humidity.setText(array[2]);
                air_smoke.setText(array[3]);
            }
        });
    }
    @Override
    protected void onDestroy() {
        super.onDestroy();
        networkThread.interrupt();
    }
}
```
