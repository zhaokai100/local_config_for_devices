const main = (config) => {
  const rules = [
    "NETWORK,udp,REJECT", 
    "PROCESS-NAME,com.follow.clash,即时",
    "PROCESS-NAME,com.radolyn.ayugram,即时",
    "PROCESS-NAME,com.discord,即时",
    "PROCESS-NAME,com.reddit.frontpage,即时",
    "PROCESS-NAME,com.valvesoftware.android.steam.community,即时",
    "PROCESS-NAME,com.metrolist.music,即时",
    "PROCESS-NAME,app.morphe.android.apps.youtube.music,即时",
    "PROCESS-NAME,ch.protonmail.android,即时",
    "PROCESS-NAME,com.google.android.gm,即时",
    "PROCESS-NAME,me.ash.reader,即时",
    "PROCESS-NAME,org.wikipedia,即时",
    "PROCESS-NAME,com.google.android.gsf,即时",
    "PROCESS-NAME,tv.pluto.android,视频",
    "PROCESS-NAME,com.rezvorck.tiktokplugin,视频",
    "PROCESS-NAME,app.morphe.android.apps.youtube.music,视频",
    "PROCESS-NAME,app.morphe.android.youtube,视频",
    "DOMAIN-KEYWORD,pornhub,非倭IP",
    "DOMAIN-KEYWORD,hanime,非倭IP",
    "DOMAIN-KEYWORD,18comic,非倭IP",
    "PROCESS-NAME,app.revanced.android.gms,通用",
    "MATCH,通用"
  ];

  config["rules"] = rules;
  return config;
}