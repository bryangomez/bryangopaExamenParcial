Ext.application({
   name:('calcular iva')
    launch:function(){
       Ext.create('Ext.TabPanel',{
           fullscreen:true,
           tabBarPosition:'bottom',
           items:[
               {
                   title:'retencion iva',
                   iconCls:'ingresa daros',
                   items:[
                      panelInicio
                   ]
               },
               {
                   title:'isr',
                   iconCls:'ingresa datos',
                   items:[
                       
                   ]
               }
           }
        
        ];
        hander:function(){
        var.iva=subtotal*0.10
        var.ret_va=iva/3*2
        var.isr=subtotal+ret
    }
}),







    
    }
   
   






             
            
}),
          
        
           



    





            





    


