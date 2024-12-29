import meta from "../../../pages/_meta.tsx";
import operators_meta from "../../../pages/operators/_meta.tsx";
import operators_reference_meta from "../../../pages/operators/reference/_meta.tsx";
import sources_meta from "../../../pages/sources/_meta.tsx";
import sources_reference_meta from "../../../pages/sources/reference/_meta.tsx";
import sources_reference_cookie_meta from "../../../pages/sources/reference/cookie/_meta.tsx";
import sources_reference_cookieParams_meta from "../../../pages/sources/reference/cookieParams/_meta.tsx";
import sources_reference_cookiePart_meta from "../../../pages/sources/reference/cookiePart/_meta.tsx";
import sources_reference_dataSource_meta from "../../../pages/sources/reference/dataSource/_meta.tsx";
import sources_reference_keyValueSource_meta from "../../../pages/sources/reference/keyValueSource/_meta.tsx";
import sources_reference_keyValueSourcePart_meta from "../../../pages/sources/reference/keyValueSourcePart/_meta.tsx";
import sources_reference_localStorage_meta from "../../../pages/sources/reference/localStorage/_meta.tsx";
import sources_reference_localStoragePart_meta from "../../../pages/sources/reference/localStoragePart/_meta.tsx";
import sources_reference_memoryStorage_meta from "../../../pages/sources/reference/memoryStorage/_meta.tsx";
import sources_reference_memoryStoragePart_meta from "../../../pages/sources/reference/memoryStoragePart/_meta.tsx";
import sources_reference_sessionStorage_meta from "../../../pages/sources/reference/sessionStorage/_meta.tsx";
import sources_reference_sessionStoragePart_meta from "../../../pages/sources/reference/sessionStoragePart/_meta.tsx";
import store_meta from "../../../pages/store/_meta.tsx";
import store_reference_meta from "../../../pages/store/reference/_meta.tsx";
import store_reference_asyncGroup_meta from "../../../pages/store/reference/asyncGroup/_meta.tsx";
import store_reference_emitter_meta from "../../../pages/store/reference/emitter/_meta.tsx";
import store_reference_group_meta from "../../../pages/store/reference/group/_meta.tsx";
import store_reference_namedGroup_meta from "../../../pages/store/reference/namedGroup/_meta.tsx";
import store_reference_state_meta from "../../../pages/store/reference/state/_meta.tsx";
import store_reference_store_meta from "../../../pages/store/reference/store/_meta.tsx";
import store_reference_storeHooks_meta from "../../../pages/store/reference/storeHooks/_meta.tsx";
export const pageMap = [{
  data: meta
}, {
  name: "about",
  route: "/about",
  frontMatter: {
    "sidebarTitle": "About"
  }
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "sidebarTitle": "Index"
  }
}, {
  name: "installation",
  route: "/installation",
  frontMatter: {
    "sidebarTitle": "Installation"
  }
}, {
  name: "operators",
  route: "/operators",
  children: [{
    data: operators_meta
  }, {
    name: "index",
    route: "/operators",
    frontMatter: {
      "sidebarTitle": "Index"
    }
  }, {
    name: "reference",
    route: "/operators/reference",
    children: [{
      data: operators_reference_meta
    }, {
      name: "completeWith",
      route: "/operators/reference/completeWith",
      frontMatter: {
        "sidebarTitle": "Completewith"
      }
    }, {
      name: "operator",
      route: "/operators/reference/operator",
      frontMatter: {
        "sidebarTitle": "Operator"
      }
    }, {
      name: "startWithDefined",
      route: "/operators/reference/startWithDefined",
      frontMatter: {
        "sidebarTitle": "Startwithdefined"
      }
    }]
  }, {
    name: "reference",
    route: "/operators/reference",
    frontMatter: {
      "sidebarTitle": "Reference"
    }
  }]
}, {
  name: "sources",
  route: "/sources",
  children: [{
    data: sources_meta
  }, {
    name: "index",
    route: "/sources",
    frontMatter: {
      "sidebarTitle": "Index"
    }
  }, {
    name: "keyValueSources",
    route: "/sources/keyValueSources",
    frontMatter: {
      "sidebarTitle": "Keyvaluesources"
    }
  }, {
    name: "reference",
    route: "/sources/reference",
    children: [{
      data: sources_reference_meta
    }, {
      name: "cookie",
      route: "/sources/reference/cookie",
      children: [{
        data: sources_reference_cookie_meta
      }, {
        name: "destroy",
        route: "/sources/reference/cookie/destroy",
        frontMatter: {
          "sidebarTitle": "Destroy"
        }
      }, {
        name: "get",
        route: "/sources/reference/cookie/get",
        frontMatter: {
          "sidebarTitle": "Get"
        }
      }, {
        name: "observe",
        route: "/sources/reference/cookie/observe",
        frontMatter: {
          "sidebarTitle": "Observe"
        }
      }, {
        name: "remove",
        route: "/sources/reference/cookie/remove",
        frontMatter: {
          "sidebarTitle": "Remove"
        }
      }, {
        name: "set",
        route: "/sources/reference/cookie/set",
        frontMatter: {
          "sidebarTitle": "Set"
        }
      }]
    }, {
      name: "cookie",
      route: "/sources/reference/cookie",
      frontMatter: {
        "sidebarTitle": "Cookie"
      }
    }, {
      name: "cookieData",
      route: "/sources/reference/cookieData",
      frontMatter: {
        "sidebarTitle": "Cookiedata"
      }
    }, {
      name: "cookieFn",
      route: "/sources/reference/cookieFn",
      frontMatter: {
        "sidebarTitle": "Cookiefn"
      }
    }, {
      name: "cookieParams",
      route: "/sources/reference/cookieParams",
      children: [{
        data: sources_reference_cookieParams_meta
      }, {
        name: "domain",
        route: "/sources/reference/cookieParams/domain",
        frontMatter: {
          "sidebarTitle": "Domain"
        }
      }, {
        name: "expires",
        route: "/sources/reference/cookieParams/expires",
        frontMatter: {
          "sidebarTitle": "Expires"
        }
      }, {
        name: "maxAge",
        route: "/sources/reference/cookieParams/maxAge",
        frontMatter: {
          "sidebarTitle": "Maxage"
        }
      }, {
        name: "path",
        route: "/sources/reference/cookieParams/path",
        frontMatter: {
          "sidebarTitle": "Path"
        }
      }, {
        name: "sameSite",
        route: "/sources/reference/cookieParams/sameSite",
        frontMatter: {
          "sidebarTitle": "Samesite"
        }
      }, {
        name: "secure",
        route: "/sources/reference/cookieParams/secure",
        frontMatter: {
          "sidebarTitle": "Secure"
        }
      }]
    }, {
      name: "cookieParams",
      route: "/sources/reference/cookieParams",
      frontMatter: {
        "sidebarTitle": "Cookieparams"
      }
    }, {
      name: "cookiePart",
      route: "/sources/reference/cookiePart",
      children: [{
        data: sources_reference_cookiePart_meta
      }, {
        name: "$",
        route: "/sources/reference/cookiePart/$",
        frontMatter: {
          "sidebarTitle": "$"
        }
      }, {
        name: "get",
        route: "/sources/reference/cookiePart/get",
        frontMatter: {
          "sidebarTitle": "Get"
        }
      }, {
        name: "remove",
        route: "/sources/reference/cookiePart/remove",
        frontMatter: {
          "sidebarTitle": "Remove"
        }
      }, {
        name: "set",
        route: "/sources/reference/cookiePart/set",
        frontMatter: {
          "sidebarTitle": "Set"
        }
      }]
    }, {
      name: "cookiePart",
      route: "/sources/reference/cookiePart",
      frontMatter: {
        "sidebarTitle": "Cookiepart"
      }
    }, {
      name: "cookiePartFn",
      route: "/sources/reference/cookiePartFn",
      frontMatter: {
        "sidebarTitle": "Cookiepartfn"
      }
    }, {
      name: "dataSource",
      route: "/sources/reference/dataSource",
      children: [{
        data: sources_reference_dataSource_meta
      }, {
        name: "$",
        route: "/sources/reference/dataSource/$",
        frontMatter: {
          "sidebarTitle": "$"
        }
      }, {
        name: "get",
        route: "/sources/reference/dataSource/get",
        frontMatter: {
          "sidebarTitle": "Get"
        }
      }, {
        name: "remove",
        route: "/sources/reference/dataSource/remove",
        frontMatter: {
          "sidebarTitle": "Remove"
        }
      }, {
        name: "set",
        route: "/sources/reference/dataSource/set",
        frontMatter: {
          "sidebarTitle": "Set"
        }
      }]
    }, {
      name: "dataSource",
      route: "/sources/reference/dataSource",
      frontMatter: {
        "sidebarTitle": "Datasource"
      }
    }, {
      name: "keyValueSource",
      route: "/sources/reference/keyValueSource",
      children: [{
        data: sources_reference_keyValueSource_meta
      }, {
        name: "destroy",
        route: "/sources/reference/keyValueSource/destroy",
        frontMatter: {
          "sidebarTitle": "Destroy"
        }
      }, {
        name: "get",
        route: "/sources/reference/keyValueSource/get",
        frontMatter: {
          "sidebarTitle": "Get"
        }
      }, {
        name: "observe",
        route: "/sources/reference/keyValueSource/observe",
        frontMatter: {
          "sidebarTitle": "Observe"
        }
      }, {
        name: "remove",
        route: "/sources/reference/keyValueSource/remove",
        frontMatter: {
          "sidebarTitle": "Remove"
        }
      }, {
        name: "set",
        route: "/sources/reference/keyValueSource/set",
        frontMatter: {
          "sidebarTitle": "Set"
        }
      }]
    }, {
      name: "keyValueSource",
      route: "/sources/reference/keyValueSource",
      frontMatter: {
        "sidebarTitle": "Keyvaluesource"
      }
    }, {
      name: "keyValueSourcePart",
      route: "/sources/reference/keyValueSourcePart",
      children: [{
        data: sources_reference_keyValueSourcePart_meta
      }, {
        name: "$",
        route: "/sources/reference/keyValueSourcePart/$",
        frontMatter: {
          "sidebarTitle": "$"
        }
      }, {
        name: "get",
        route: "/sources/reference/keyValueSourcePart/get",
        frontMatter: {
          "sidebarTitle": "Get"
        }
      }, {
        name: "remove",
        route: "/sources/reference/keyValueSourcePart/remove",
        frontMatter: {
          "sidebarTitle": "Remove"
        }
      }, {
        name: "set",
        route: "/sources/reference/keyValueSourcePart/set",
        frontMatter: {
          "sidebarTitle": "Set"
        }
      }]
    }, {
      name: "keyValueSourcePart",
      route: "/sources/reference/keyValueSourcePart",
      frontMatter: {
        "sidebarTitle": "Keyvaluesourcepart"
      }
    }, {
      name: "localStorage",
      route: "/sources/reference/localStorage",
      children: [{
        data: sources_reference_localStorage_meta
      }, {
        name: "destroy",
        route: "/sources/reference/localStorage/destroy",
        frontMatter: {
          "sidebarTitle": "Destroy"
        }
      }, {
        name: "get",
        route: "/sources/reference/localStorage/get",
        frontMatter: {
          "sidebarTitle": "Get"
        }
      }, {
        name: "observe",
        route: "/sources/reference/localStorage/observe",
        frontMatter: {
          "sidebarTitle": "Observe"
        }
      }, {
        name: "remove",
        route: "/sources/reference/localStorage/remove",
        frontMatter: {
          "sidebarTitle": "Remove"
        }
      }, {
        name: "set",
        route: "/sources/reference/localStorage/set",
        frontMatter: {
          "sidebarTitle": "Set"
        }
      }]
    }, {
      name: "localStorage",
      route: "/sources/reference/localStorage",
      frontMatter: {
        "sidebarTitle": "Localstorage"
      }
    }, {
      name: "localStorageFn",
      route: "/sources/reference/localStorageFn",
      frontMatter: {
        "sidebarTitle": "Localstoragefn"
      }
    }, {
      name: "localStoragePart",
      route: "/sources/reference/localStoragePart",
      children: [{
        data: sources_reference_localStoragePart_meta
      }, {
        name: "$",
        route: "/sources/reference/localStoragePart/$",
        frontMatter: {
          "sidebarTitle": "$"
        }
      }, {
        name: "get",
        route: "/sources/reference/localStoragePart/get",
        frontMatter: {
          "sidebarTitle": "Get"
        }
      }, {
        name: "remove",
        route: "/sources/reference/localStoragePart/remove",
        frontMatter: {
          "sidebarTitle": "Remove"
        }
      }, {
        name: "set",
        route: "/sources/reference/localStoragePart/set",
        frontMatter: {
          "sidebarTitle": "Set"
        }
      }]
    }, {
      name: "localStoragePart",
      route: "/sources/reference/localStoragePart",
      frontMatter: {
        "sidebarTitle": "Localstoragepart"
      }
    }, {
      name: "localStoragePartFn",
      route: "/sources/reference/localStoragePartFn",
      frontMatter: {
        "sidebarTitle": "Localstoragepartfn"
      }
    }, {
      name: "memoryStorage",
      route: "/sources/reference/memoryStorage",
      children: [{
        data: sources_reference_memoryStorage_meta
      }, {
        name: "destroy",
        route: "/sources/reference/memoryStorage/destroy",
        frontMatter: {
          "sidebarTitle": "Destroy"
        }
      }, {
        name: "get",
        route: "/sources/reference/memoryStorage/get",
        frontMatter: {
          "sidebarTitle": "Get"
        }
      }, {
        name: "observe",
        route: "/sources/reference/memoryStorage/observe",
        frontMatter: {
          "sidebarTitle": "Observe"
        }
      }, {
        name: "remove",
        route: "/sources/reference/memoryStorage/remove",
        frontMatter: {
          "sidebarTitle": "Remove"
        }
      }, {
        name: "set",
        route: "/sources/reference/memoryStorage/set",
        frontMatter: {
          "sidebarTitle": "Set"
        }
      }]
    }, {
      name: "memoryStorage",
      route: "/sources/reference/memoryStorage",
      frontMatter: {
        "sidebarTitle": "Memorystorage"
      }
    }, {
      name: "memoryStorageFn",
      route: "/sources/reference/memoryStorageFn",
      frontMatter: {
        "sidebarTitle": "Memorystoragefn"
      }
    }, {
      name: "memoryStoragePart",
      route: "/sources/reference/memoryStoragePart",
      children: [{
        data: sources_reference_memoryStoragePart_meta
      }, {
        name: "$",
        route: "/sources/reference/memoryStoragePart/$",
        frontMatter: {
          "sidebarTitle": "$"
        }
      }, {
        name: "get",
        route: "/sources/reference/memoryStoragePart/get",
        frontMatter: {
          "sidebarTitle": "Get"
        }
      }, {
        name: "remove",
        route: "/sources/reference/memoryStoragePart/remove",
        frontMatter: {
          "sidebarTitle": "Remove"
        }
      }, {
        name: "set",
        route: "/sources/reference/memoryStoragePart/set",
        frontMatter: {
          "sidebarTitle": "Set"
        }
      }]
    }, {
      name: "memoryStoragePart",
      route: "/sources/reference/memoryStoragePart",
      frontMatter: {
        "sidebarTitle": "Memorystoragepart"
      }
    }, {
      name: "memoryStoragePartFn",
      route: "/sources/reference/memoryStoragePartFn",
      frontMatter: {
        "sidebarTitle": "Memorystoragepartfn"
      }
    }, {
      name: "sessionStorage",
      route: "/sources/reference/sessionStorage",
      children: [{
        data: sources_reference_sessionStorage_meta
      }, {
        name: "destroy",
        route: "/sources/reference/sessionStorage/destroy",
        frontMatter: {
          "sidebarTitle": "Destroy"
        }
      }, {
        name: "get",
        route: "/sources/reference/sessionStorage/get",
        frontMatter: {
          "sidebarTitle": "Get"
        }
      }, {
        name: "observe",
        route: "/sources/reference/sessionStorage/observe",
        frontMatter: {
          "sidebarTitle": "Observe"
        }
      }, {
        name: "remove",
        route: "/sources/reference/sessionStorage/remove",
        frontMatter: {
          "sidebarTitle": "Remove"
        }
      }, {
        name: "set",
        route: "/sources/reference/sessionStorage/set",
        frontMatter: {
          "sidebarTitle": "Set"
        }
      }]
    }, {
      name: "sessionStorage",
      route: "/sources/reference/sessionStorage",
      frontMatter: {
        "sidebarTitle": "Sessionstorage"
      }
    }, {
      name: "sessionStorageFn",
      route: "/sources/reference/sessionStorageFn",
      frontMatter: {
        "sidebarTitle": "Sessionstoragefn"
      }
    }, {
      name: "sessionStoragePart",
      route: "/sources/reference/sessionStoragePart",
      children: [{
        data: sources_reference_sessionStoragePart_meta
      }, {
        name: "$",
        route: "/sources/reference/sessionStoragePart/$",
        frontMatter: {
          "sidebarTitle": "$"
        }
      }, {
        name: "get",
        route: "/sources/reference/sessionStoragePart/get",
        frontMatter: {
          "sidebarTitle": "Get"
        }
      }, {
        name: "remove",
        route: "/sources/reference/sessionStoragePart/remove",
        frontMatter: {
          "sidebarTitle": "Remove"
        }
      }, {
        name: "set",
        route: "/sources/reference/sessionStoragePart/set",
        frontMatter: {
          "sidebarTitle": "Set"
        }
      }]
    }, {
      name: "sessionStoragePart",
      route: "/sources/reference/sessionStoragePart",
      frontMatter: {
        "sidebarTitle": "Sessionstoragepart"
      }
    }, {
      name: "sessionStoragePartFn",
      route: "/sources/reference/sessionStoragePartFn",
      frontMatter: {
        "sidebarTitle": "Sessionstoragepartfn"
      }
    }]
  }, {
    name: "reference",
    route: "/sources/reference",
    frontMatter: {
      "sidebarTitle": "Reference"
    }
  }]
}, {
  name: "store",
  route: "/store",
  children: [{
    data: store_meta
  }, {
    name: "emitters",
    route: "/store/emitters",
    frontMatter: {
      "sidebarTitle": "Emitters"
    }
  }, {
    name: "groups",
    route: "/store/groups",
    frontMatter: {
      "sidebarTitle": "Groups"
    }
  }, {
    name: "index",
    route: "/store",
    frontMatter: {
      "sidebarTitle": "Index"
    }
  }, {
    name: "reference",
    route: "/store/reference",
    children: [{
      data: store_reference_meta
    }, {
      name: "asyncGroup",
      route: "/store/reference/asyncGroup",
      children: [{
        data: store_reference_asyncGroup_meta
      }, {
        name: "complete",
        route: "/store/reference/asyncGroup/complete",
        frontMatter: {
          "sidebarTitle": "Complete"
        }
      }, {
        name: "fail",
        route: "/store/reference/asyncGroup/fail",
        frontMatter: {
          "sidebarTitle": "Fail"
        }
      }, {
        name: "finish",
        route: "/store/reference/asyncGroup/finish",
        frontMatter: {
          "sidebarTitle": "Finish"
        }
      }, {
        name: "initialize",
        route: "/store/reference/asyncGroup/initialize",
        frontMatter: {
          "sidebarTitle": "Initialize"
        }
      }, {
        name: "launch",
        route: "/store/reference/asyncGroup/launch",
        frontMatter: {
          "sidebarTitle": "Launch"
        }
      }, {
        name: "state",
        route: "/store/reference/asyncGroup/state",
        frontMatter: {
          "sidebarTitle": "State"
        }
      }, {
        name: "success",
        route: "/store/reference/asyncGroup/success",
        frontMatter: {
          "sidebarTitle": "Success"
        }
      }, {
        name: "useCache",
        route: "/store/reference/asyncGroup/useCache",
        frontMatter: {
          "sidebarTitle": "Usecache"
        }
      }]
    }, {
      name: "asyncGroup",
      route: "/store/reference/asyncGroup",
      frontMatter: {
        "sidebarTitle": "Asyncgroup"
      }
    }, {
      name: "asyncGroupFn",
      route: "/store/reference/asyncGroupFn",
      frontMatter: {
        "sidebarTitle": "Asyncgroupfn"
      }
    }, {
      name: "changeDefaultComparison",
      route: "/store/reference/changeDefaultComparison",
      frontMatter: {
        "sidebarTitle": "Changedefaultcomparison"
      }
    }, {
      name: "comparison",
      route: "/store/reference/comparison",
      frontMatter: {
        "sidebarTitle": "Comparison"
      }
    }, {
      name: "emitter",
      route: "/store/reference/emitter",
      children: [{
        data: store_reference_emitter_meta
      }, {
        name: "$",
        route: "/store/reference/emitter/$",
        frontMatter: {
          "sidebarTitle": "$"
        }
      }, {
        name: "complete",
        route: "/store/reference/emitter/complete",
        frontMatter: {
          "sidebarTitle": "Complete"
        }
      }, {
        name: "effect",
        route: "/store/reference/emitter/effect",
        frontMatter: {
          "sidebarTitle": "Effect"
        }
      }, {
        name: "emit",
        route: "/store/reference/emitter/emit",
        frontMatter: {
          "sidebarTitle": "Emit"
        }
      }, {
        name: "initialize",
        route: "/store/reference/emitter/initialize",
        frontMatter: {
          "sidebarTitle": "Initialize"
        }
      }, {
        name: "manage",
        route: "/store/reference/emitter/manage",
        frontMatter: {
          "sidebarTitle": "Manage"
        }
      }, {
        name: "receive",
        route: "/store/reference/emitter/receive",
        frontMatter: {
          "sidebarTitle": "Receive"
        }
      }, {
        name: "select",
        route: "/store/reference/emitter/select",
        frontMatter: {
          "sidebarTitle": "Select"
        }
      }, {
        name: "tap",
        route: "/store/reference/emitter/tap",
        frontMatter: {
          "sidebarTitle": "Tap"
        }
      }, {
        name: "transmit",
        route: "/store/reference/emitter/transmit",
        frontMatter: {
          "sidebarTitle": "Transmit"
        }
      }, {
        name: "wait",
        route: "/store/reference/emitter/wait",
        frontMatter: {
          "sidebarTitle": "Wait"
        }
      }, {
        name: "zip",
        route: "/store/reference/emitter/zip",
        frontMatter: {
          "sidebarTitle": "Zip"
        }
      }]
    }, {
      name: "emitter",
      route: "/store/reference/emitter",
      frontMatter: {
        "sidebarTitle": "Emitter"
      }
    }, {
      name: "emitterFn",
      route: "/store/reference/emitterFn",
      frontMatter: {
        "sidebarTitle": "Emitterfn"
      }
    }, {
      name: "group",
      route: "/store/reference/group",
      children: [{
        data: store_reference_group_meta
      }, {
        name: "complete",
        route: "/store/reference/group/complete",
        frontMatter: {
          "sidebarTitle": "Complete"
        }
      }, {
        name: "initialize",
        route: "/store/reference/group/initialize",
        frontMatter: {
          "sidebarTitle": "Initialize"
        }
      }, {
        name: "markAsReady",
        route: "/store/reference/group/markAsReady",
        frontMatter: {
          "sidebarTitle": "Markasready"
        }
      }]
    }, {
      name: "group",
      route: "/store/reference/group",
      frontMatter: {
        "sidebarTitle": "Group"
      }
    }, {
      name: "groupFn",
      route: "/store/reference/groupFn",
      frontMatter: {
        "sidebarTitle": "Groupfn"
      }
    }, {
      name: "namedGroup",
      route: "/store/reference/namedGroup",
      children: [{
        data: store_reference_namedGroup_meta
      }, {
        name: "complete",
        route: "/store/reference/namedGroup/complete",
        frontMatter: {
          "sidebarTitle": "Complete"
        }
      }, {
        name: "initialize",
        route: "/store/reference/namedGroup/initialize",
        frontMatter: {
          "sidebarTitle": "Initialize"
        }
      }]
    }, {
      name: "namedGroup",
      route: "/store/reference/namedGroup",
      frontMatter: {
        "sidebarTitle": "Namedgroup"
      }
    }, {
      name: "namedGroupFn",
      route: "/store/reference/namedGroupFn",
      frontMatter: {
        "sidebarTitle": "Namedgroupfn"
      }
    }, {
      name: "state",
      route: "/store/reference/state",
      children: [{
        data: store_reference_state_meta
      }, {
        name: "$",
        route: "/store/reference/state/$",
        frontMatter: {
          "sidebarTitle": "$"
        }
      }, {
        name: "compareBy",
        route: "/store/reference/state/compareBy",
        frontMatter: {
          "sidebarTitle": "Compareby"
        }
      }, {
        name: "complete",
        route: "/store/reference/state/complete",
        frontMatter: {
          "sidebarTitle": "Complete"
        }
      }, {
        name: "connect",
        route: "/store/reference/state/connect",
        frontMatter: {
          "sidebarTitle": "Connect"
        }
      }, {
        name: "effect",
        route: "/store/reference/state/effect",
        frontMatter: {
          "sidebarTitle": "Effect"
        }
      }, {
        name: "get",
        route: "/store/reference/state/get",
        frontMatter: {
          "sidebarTitle": "Get"
        }
      }, {
        name: "initialize",
        route: "/store/reference/state/initialize",
        frontMatter: {
          "sidebarTitle": "Initialize"
        }
      }, {
        name: "manage",
        route: "/store/reference/state/manage",
        frontMatter: {
          "sidebarTitle": "Manage"
        }
      }, {
        name: "receive",
        route: "/store/reference/state/receive",
        frontMatter: {
          "sidebarTitle": "Receive"
        }
      }, {
        name: "reset",
        route: "/store/reference/state/reset",
        frontMatter: {
          "sidebarTitle": "Reset"
        }
      }, {
        name: "select",
        route: "/store/reference/state/select",
        frontMatter: {
          "sidebarTitle": "Select"
        }
      }, {
        name: "set",
        route: "/store/reference/state/set",
        frontMatter: {
          "sidebarTitle": "Set"
        }
      }, {
        name: "tap",
        route: "/store/reference/state/tap",
        frontMatter: {
          "sidebarTitle": "Tap"
        }
      }, {
        name: "transmit",
        route: "/store/reference/state/transmit",
        frontMatter: {
          "sidebarTitle": "Transmit"
        }
      }, {
        name: "update",
        route: "/store/reference/state/update",
        frontMatter: {
          "sidebarTitle": "Update"
        }
      }, {
        name: "useLazyEmission",
        route: "/store/reference/state/useLazyEmission",
        frontMatter: {
          "sidebarTitle": "Uselazyemission"
        }
      }, {
        name: "useLazyEmissionOnce",
        route: "/store/reference/state/useLazyEmissionOnce",
        frontMatter: {
          "sidebarTitle": "Uselazyemissiononce"
        }
      }, {
        name: "wait",
        route: "/store/reference/state/wait",
        frontMatter: {
          "sidebarTitle": "Wait"
        }
      }, {
        name: "zip",
        route: "/store/reference/state/zip",
        frontMatter: {
          "sidebarTitle": "Zip"
        }
      }]
    }, {
      name: "state",
      route: "/store/reference/state",
      frontMatter: {
        "sidebarTitle": "State"
      }
    }, {
      name: "stateFn",
      route: "/store/reference/stateFn",
      frontMatter: {
        "sidebarTitle": "Statefn"
      }
    }, {
      name: "store",
      route: "/store/reference/store",
      children: [{
        data: store_reference_store_meta
      }, {
        name: "complete",
        route: "/store/reference/store/complete",
        frontMatter: {
          "sidebarTitle": "Complete"
        }
      }, {
        name: "initialize",
        route: "/store/reference/store/initialize",
        frontMatter: {
          "sidebarTitle": "Initialize"
        }
      }, {
        name: "markAsReady",
        route: "/store/reference/store/markAsReady",
        frontMatter: {
          "sidebarTitle": "Markasready"
        }
      }]
    }, {
      name: "store",
      route: "/store/reference/store",
      frontMatter: {
        "sidebarTitle": "Store"
      }
    }, {
      name: "storeHooks",
      route: "/store/reference/storeHooks",
      children: [{
        data: store_reference_storeHooks_meta
      }, {
        name: "afterStoreComplete",
        route: "/store/reference/storeHooks/afterStoreComplete",
        frontMatter: {
          "sidebarTitle": "Afterstorecomplete"
        }
      }, {
        name: "afterStoreInit",
        route: "/store/reference/storeHooks/afterStoreInit",
        frontMatter: {
          "sidebarTitle": "Afterstoreinit"
        }
      }, {
        name: "beforeStoreComplete",
        route: "/store/reference/storeHooks/beforeStoreComplete",
        frontMatter: {
          "sidebarTitle": "Beforestorecomplete"
        }
      }, {
        name: "beforeStoreInit",
        route: "/store/reference/storeHooks/beforeStoreInit",
        frontMatter: {
          "sidebarTitle": "Beforestoreinit"
        }
      }]
    }, {
      name: "storeHooks",
      route: "/store/reference/storeHooks",
      frontMatter: {
        "sidebarTitle": "Storehooks"
      }
    }, {
      name: "transmit",
      route: "/store/reference/transmit",
      frontMatter: {
        "sidebarTitle": "Transmit"
      }
    }]
  }, {
    name: "reference",
    route: "/store/reference",
    frontMatter: {
      "sidebarTitle": "Reference"
    }
  }, {
    name: "states",
    route: "/store/states",
    frontMatter: {
      "sidebarTitle": "States"
    }
  }]
}];