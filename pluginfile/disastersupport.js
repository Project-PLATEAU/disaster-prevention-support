reearth.ui.show(`
  <style>

    html{
      width:350px;
      height:550px;
    }

    body {
      margin: 0;
      height: 100%;
    }

    #wrapper {
      border-radius: 1px;
      width:100%;
      position: absolute;
      min-width: 350px;
      display: flex;
      flex-direction: column;
      background: rgb(255, 255, 255);
      transition: all 0.25s ease 0s;
      z-index: 2;
      transform: translate3d(0px, 0px, 0px);
    }

    #header {
      background: #00BEBE;
      text-align: right;
      color: white;
      padding:15px 30px 15px 15px;
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
      flex: none;
      order: 3;
      align-self: stretch;
      flex-grow: 0;
    }

.contents-wrapper{
  padding:10px 30px 10px 10px;
  background:#F0F0F0;
}


.content{
  background:#FFF;
  margin-top:10px;
}
.layer-head{
  padding:8px 12px 8px;
}
.layers{
  padding:12px 12px 12px 36px;
}
.layer{
  position: relative;
  height:36px;
  margin-bottom:12px;
}

.layer span{
  position: absolute;
  top: 50%;
  -webkit-transform : translateY(-50%);
  transform : translateY(-50%);
  margin-left:10px;
}


svg{
  margin-top:5px;
}

.hide{
  display:none;
}

.btn{
  border:none;
  background: none;
  
}

.export-wrapper{
      background: #F0F0F0;
      text-align: right;
      padding:10px 30px 12px 12px;
}

.export{
  display:inline;
}


input:checked + label::after {opacity : 1 ;}

label {
  position: relative;
  cursor: pointer;
  padding-left: 30px;
}

label::before,
label::after {
  content: "";
  display: block; 
  border-radius: 50%;
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
}

label::before {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  left: 5px;
}

label::after {
  background-color: #ddd;
  border-radius: 50%;
  opacity: 0;
  width: 16px;
  height: 16px;
  left: 7px
}

input:checked + label::after {
  opacity: 1;
}

.visually-hidden {
 position: absolute;
 white-space: nowrap;
 border: 0;
 clip: rect(0 0 0 0);
 clip-path: inset(50%);
 overflow: hidden;
 height: 1px;
 width: 1px;
 margin: -1px;
 padding: 0;
}


label {
  float:right;
  cursor: pointer;
  position: relative;
  margin-left: 10px;
  margin-top:15px;
  padding-left: 50px;
}

label::before,
label::after {
  background-color: #ddd;
  border-radius: 50%;
  transition: 0.3s;
  transform: translateY(-50%);
  top: 50%;
  left: 0px;
}


label::before {
  background-color: #ddd;
  border-radius: 10px;
  height: 16px;
  width: 28px;
  left: 5px;
}

label::after {
  background-color: #fff;
  border:1px solid  #ddd;
  border-radius: 50%;
  opacity: 1;
  height: 12px;
  width: 12px;
  left: 6px;
}

input:checked + label::before {
  border:1px solid  #1890FF;
  background-color: #1890FF;
}

input:checked + label::after {
  border:1px solid  #1890FF;
  left: 20px;
}

.check{
  float:right;
  margin-top:10px;
}

  #dropdown {
    margin-top: 2px;
    max-height: 200px;
    overflow: scroll;
  }
  #dropdown::-webkit-scrollbar {
    display: none;
  }

  </style>
 
  <div id="wrapper">
    <div id="sub-wrapper">
      <div id="header">
        <div style="float: left">
        <span>
        防災施設
        </span>
        </div>
        <button id="btn-head1" class="btn btn-head" onClick="btnHide(elem_contents_wrapper,this)">
          ▼
        </button>   
      </div>
      <div id ="contents-wrapper" class="contents-wrapper">

        <div class="content kanren" id="kanren">
          <div class="layer-head">
            
            <button id="btn-kanren-head" class="btn" onClick="btnHide(elemLayersKanren,this)">
              ▼
            </button>  
            <span>防災関連施設</span>
            
            <input type="checkbox" class="check check-lyr visually-hidden" id="check_kanren" data-lyr="kanren" checked onClick="checkParLyr(this)">
            <label for="check_kanren"></label>

          </div>
          
          <div id="layers_kanren" class="layers">
          
          </div>
        </div>
    
        <div class="content facility" id="facility">
          <div class="layer-head">
            
            <button id="btn-facility-head" class="btn" onClick="btnHide(elemLayersfacility,this)">
              ▼
            </button>  
            <span>多くの人が集まる施設</span>
            
            <input type="checkbox" class="check check-lyr visually-hidden" id="check_facility" data-lyr="facility" checked onClick="checkParLyr(this)">
            <label for="check_facility"></label>

          </div>
          
          <div id="layers_facility" class="layers">
          
          </div>
        </div>
      
        <div class="content helpful" id="helpfu">
          <div class="layer-head">
            
            <button id="btn-helpful-head" class="btn" onClick="btnHide(elemLayershelpful,this)">
              ▼
            </button>  
            <span>災害時に役に立つもの</span>
            <input type="checkbox" class="check check-lyr visually-hidden" id="check_helpful" data-lyr="helpful" checked onClick="checkParLyr(this)">
            
              <label for="check_helpful"></label>

          </div>
          
          <div id="layers_helpful" class="layers">
          
          </div>
        </div>
      
        <div class="content barrier" id="barrier">
          <div class="layer-head">
            
            <button id="btn-barrier-head" class="btn" onClick="btnHide(elemLayersbarrier,this)">
              ▼
            </button>  
            <span>災害時に障害になる設備等</span>
            
            <input type="checkbox" class="check check-lyr visually-hidden" id="check_barrier" data-lyr="barrier" checked onClick="checkParLyr(this)">
            <label for="check_barrier"></label>

          </div>
          
          <div id="layers_barrier" class="layers">
          
          </div>
        </div>

      </div>
      <div class="export-wrapper">
        <div class="export">
          <button onClick="exportCSV()">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M11.8795 10.8325H11.0388C10.9732 10.8325 10.9185 10.8872 10.9185 10.9528V11.9184H1.07945V2.0778H10.9201V3.04342C10.9201 3.10905 10.9748 3.16373 11.0404 3.16373H11.881C11.9466 3.16373 12.0013 3.11061 12.0013 3.04342V1.4778C12.0013 1.21217 11.7873 0.998108 11.5216 0.998108H0.479451C0.213826 0.998108 -0.000236511 1.21217 -0.000236511 1.4778V12.5184C-0.000236511 12.784 0.213826 12.9981 0.479451 12.9981H11.5201C11.7857 12.9981 11.9998 12.784 11.9998 12.5184V10.9528C11.9998 10.8856 11.9451 10.8325 11.8795 10.8325ZM12.1701 6.89967L9.95289 5.14967C9.87008 5.08405 9.74976 5.14342 9.74976 5.24811V6.43561H4.84351C4.77476 6.43561 4.71851 6.49186 4.71851 6.56061V7.43561C4.71851 7.50436 4.77476 7.56061 4.84351 7.56061H9.74976V8.74811C9.74976 8.8528 9.87164 8.91217 9.95289 8.84655L12.1701 7.09655C12.185 7.08485 12.1971 7.06991 12.2054 7.05286C12.2137 7.0358 12.218 7.01708 12.218 6.99811C12.218 6.97914 12.2137 6.96041 12.2054 6.94336C12.1971 6.9263 12.185 6.91136 12.1701 6.89967V6.89967Z" fill="black" fill-opacity="0.85"/>
            </svg>
            エクスポート
          </button>
        </div>
      </div>
    
    </div>


    <div id="sub-wrapper">
      <div id="header">
        <div style="float: left">
        <span>
        ハザードデータ
        </span>
        </div>
        <button id="btn-head2" class="btn btn-head" onClick="btnHide(elem_contents_wrapper2,this)">
          ▶︎
        </button>   
      </div>
      <div id ="contents-wrapper2" class="contents-wrapper hide">

        <div class="content dosyasaigai" id="dosyasaigai">
          <div class="layer-head">
            
            <button id="btn-dosyasaigai-head" class="btn" onClick="btnHide(elemLayersdosyasaigai,this)">
              ▼
            </button>  
            <span>土砂災害警戒区域等</span>
            
            <input type="checkbox" class="check check-lyr visually-hidden" id="check_dosyasaigai" data-lyr="dosyasaigai" checked onClick="checkParLyr(this)">
            <label for="check_dosyasaigai"></label>

          </div>
          
          <div id="layers_dosyasaigai" class="layers">
          
          </div>
        </div>
    
        <div class="content shinsui" id="shinsui">
          <div class="layer-head">
            
            <button id="btn-shinsui-head" class="btn" onClick="btnHide(elemLayersshinsui,this)">
              ▼
            </button>  
            <span>洪水浸水想定区域</span>
            
            <input type="checkbox" class="check check-lyr visually-hidden" id="check_shinsui" data-lyr="shinsui" checked onClick="checkParLyr(this)">
            <label for="check_shinsui"></label>

          </div>
          
          <div id="layers_shinsui" class="layers">
          
          </div>
        </div>
      
        
      
      

      </div>
    
    </div>

    <div id="sub-wrapper">
      <div id="header">
        <div style="float: left">
        <span>
      避難ルート
        </span>
        </div>
        <button id="btn-head3" class="btn btn-head" onClick="btnHide(elem_contents_wrapper3,this)">
          ▶︎
        </button>   
      </div>
      <div id ="contents-wrapper3" class="contents-wrapper hide">

        <div class="content route" id="route">
          <div class="layer-head">
            
            <button id="btn-route-head" class="btn" onClick="btnHide(elemLayersroute,this)">
              ▼
            </button>  
            <span>避難ルート</span>
            
            <input type="checkbox" class="check check-lyr visually-hidden" id="check_route" data-lyr="route" checked onClick="checkParLyr(this)">
            <label for="check_route"></label>

          </div>
          
          <div id="layers_route" class="layers">
          
          </div>
        </div>
    
        
      
        
      
      

      </div>
    
    </div>




  </div>


<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.14.2/xlsx.full.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.8/FileSaver.min.js"></script>

<script>

  let layers, reearth, property;


  let check_all = document.getElementsByClassName("contents-wrapper");

  let elem_contents_wrapper=document.getElementById("contents-wrapper");
  let elem_contents_wrapper2=document.getElementById("contents-wrapper2");
  let elem_contents_wrapper3=document.getElementById("contents-wrapper3");

  let elemLayersKanren=document.getElementById("layers_kanren");
  let elemLayersfacility=document.getElementById("layers_facility");

  let elemLayershelpful=document.getElementById("layers_helpful");
  let elemLayersbarrier=document.getElementById("layers_barrier");


  let elemLayersdosyasaigai=document.getElementById("layers_dosyasaigai");
  let elemLayersshinsui=document.getElementById("layers_shinsui");
  let elemLayersroute=document.getElementById("layers_route");

  function btnHide(ele,btn){
    if(ele.classList.contains("hide")){
      ele.classList.remove("hide");
      btn.innerHTML="▼"
    }else{
      ele.classList.add("hide");
      btn.innerHTML="▶︎"
    }
    // arrange html height
    let flg_check_all = Array.from(check_all).every(function(val){
      return val.classList.contains("hide");
    });

    if (flg_check_all){
      document.getElementsByTagName("html")[0].style.height = "210px";
    }else{
      document.getElementsByTagName("html")[0].style.height = "550px";
    }
  };
  



    


  function insertLayer(id,lyrObj,num){
    let svgId;
    var elemContent = document.getElementById("layers_"+id);



  // judge Image URL
  

  
  if(!lyrObj.url){
    tempImageurl='<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">'+'<g clip-path="url(#clip0_147_1133)">'+'<rect width="30" height="30" fill="white"/>'+'</g>'+'<defs>'+'<clipPath id="clip0_147_1133">'+'<rect width="30" height="30" fill="white"/>'+'</clipPath></defs></svg>'
  }else{
    tempImageurl='<img src='+lyrObj.url+' height="30">'
  };




  var add_code = 
  '<div class="layer">'+
    tempImageurl +
    '<span>' + lyrObj.lyrName + '</span>'+
    '<input type="checkbox" class="check check-lyr child-lyr ' + id + ' visually-hidden" id="check_' + id + "_" + num + '" data-lyr="' + lyrObj.tagName+ '" data-parent="' + id + '" data-lyrname="' + lyrObj.lyrName + '" checked onClick="checkLyr(this)">'+
    '<label for="check_' + id + "_" + num + '"></label>'+
    '</div>';
  
  elemContent.insertAdjacentHTML('beforeend', add_code);




  if ( lyrObj.view === true ){
    document.getElementById( "check_" + id + "_" + num ).checked = true;
  } else {
    document.getElementById( "check_" + id + "_" + num ).checked = false;
  };




}



 
function checkLyr(elemLyr){
  const lyrInfo ={view:elemLyr.checked,tag:elemLyr.dataset.lyr,id:elemLyr.id};
  let targetLyr =[];
  for (k of layers){
    if (k.tags !== undefined){
      if (k["tags"].some((t) => t.label === lyrInfo.tag)){
        targetLyr.push(k);
      }
    }
  }



  // const targetLyr = reearth.layers.findByTagLabels(lyrInfo.tag);
  const parTag ='check_' + lyrInfo.id.split('_')[1];
  let elemPar=document.getElementById(parTag);
  if(lyrInfo.view===true && elemPar.checked===true){
    for(l of targetLyr){
      const children = findChildren(l);
      for(child of children){
        reearth.layers.show(child.id);
      }
    }
  }else{
    for(l of targetLyr){
      const children = findChildren(l);
      for(child of children){
        reearth.layers.hide(child.id);
      }
    }
  }
};


  function checkParLyr(elemLyr){
    const lyrInfo ={view:elemLyr.checked,tag:elemLyr.dataset.lyr}
    let layersElm = document.getElementsByClassName(lyrInfo.tag);
    if(lyrInfo.view === true){
      for(i of layersElm){
        if(i.tagName==="INPUT" && i.checked === true){
          let targetLyr =[];
          for (k of layers){
            if (k.tags !== undefined){
              if (k["tags"].some((t) => t.label === i.dataset.lyr)){
                targetLyr.push(k);
              }
            }
          }


          // const targetLyr = reearth.layers.findByTagLabels(i.dataset.lyr);
          for(l of targetLyr){
            const children = findChildren(l);
            for(child of children){
              reearth.layers.show(child.id);
            }
          }
        }
      }
    }else{
      for(i of layersElm){
        if(i.tagName==="INPUT"){
          let targetLyr =[];
          for (k of layers){
            if (k.tags !== undefined){
              if (k["tags"].some((t) => t.label === i.dataset.lyr)){
                targetLyr.push(k);
              }
            }
          }

          // const targetLyr = reearth.layers.findByTagLabels(i.dataset.lyr);
          for(l of targetLyr){
            const children = findChildren(l);
            for(child of children){
              reearth.layers.hide(child.id);
            }
          }
        }
      }

    }
  };


 function findChildren(lyr){
  const lyr_list =[];
  if (lyr.children != undefined){
    for (let i =0; i < lyr.children.length; i++){
      lyr_list.push(lyr.children[i]);
    }
  }else{
    lyr_list.push(lyr);
  }
  return lyr_list;
 }


  
function exportCSV(){
	let checkedLyr=[];
	let lyrName=[];
	let layerIds=document.getElementsByClassName("child-lyr");
  
  for(lyr of layerIds){
    if ( lyr.dataset.parent === "kanren" || lyr.dataset.parent === "facility" || lyr.dataset.parent === "helpful" || lyr.dataset.parent === "barrier"){
      const parent = "check_" + lyr.dataset.parent;
      let elemParent=document.getElementById(parent);

      if(lyr.checked===true && elemParent.checked ===true){
        checkedLyr.push(lyr.dataset.lyr);
        lyrName.push(lyr.dataset.lyrname);
      }
    }
  };



  // workbook
  const workbook = XLSX.utils.book_new();


  let viewport = reearth.camera.viewport;
  for(let lyrnum = 0; lyrnum < checkedLyr.length; lyrnum++){
    let targetLyr =[];
    for (k of layers){
      if (k.tags !== undefined & k.type == "marker"){
        if (k["tags"].some((t) => t.label === checkedLyr[lyrnum])){
          targetLyr.push(k);
        }
      }
    }

    // const targetLyr = reearth.layers.findByTagLabels(checkedLyr[lyrnum]);
    for (l of targetLyr){
      const childrens = findChildren(l);
      let children = childrens.filter((v) => viewport.south <= v.property.default.location.lat && v.property.default.location.lat <= viewport.north && viewport.west <= v.property.default.location.lng && v.property.default.location.lng <= viewport.east)
      let attr =[];
      if(children.length >0){
        for (let i = 0; i < children.length; i++){
          // create contents json
          let attr_temp ={};
          if (children[i].infobox.property.default && children[i].infobox.property.default.title){
            attr_temp["名称"] =children[i].infobox.property.default.title;
          }else{
            attr_temp["名称"] ="";
          }
          for(block of children[i].infobox.blocks){
            if (block.extensionId ==="textblock" &&  block.property.default){
              attr_temp[block.property.default.title] = block.property.default.text;
            }else if(block.extensionId ==="imageblock" && block.property.default){
              attr_temp["image"] = block.property.default.image;
            }else if(block.extensionId ==="dlblock" && block.property.items){
              for (item of block.property.items){
                if (item.item_datatype === "number"){
                  attr_temp[item.item_title] = item.item_datanum;
                }else{
                  attr_temp[item.item_title] = item.item_datastr;
                }
              }
            }
          }

          attr.push(attr_temp);
        }
      }
      // append sheet
      const worksheet = XLSX.utils.json_to_sheet(attr);
      XLSX.utils.book_append_sheet(workbook, worksheet, lyrName[lyrnum]);
    }

  }
  // export excel
  XLSX.writeFile(workbook, "Downloadfile.xlsx");
};


window.addEventListener("message", e => {
  if (e.source !== parent) return;
  layers = e.source.reearth.layers.layers;
  reearth = e.source.reearth;
  property = e.data.property;
  
  for (key of Object.keys(property)){
    var lblock = document.getElementById("layers_"+key);
    lblock.innerHTML = "";
    let num =1;
    for(i of property[key]){
      insertLayer(key,i,num);
      let elemlyrcheck = document.getElementById("check_" + key + "_" + num);
      checkLyr(elemlyrcheck);
      
      num +=1;
    }
    

    
  }


});



</script>

`);


reearth.on("update", send);
send();


function send() {
  reearth.ui.postMessage({
    layers: reearth.layers.layers,
    property: reearth.widget.property
  });
}


