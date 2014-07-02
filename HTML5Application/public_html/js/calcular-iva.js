Ext.application({
   name:('calcular iva')
    launch:function(){
       Ext.create('Ext.TabPanel',{
           fullscreen:true,
           tabBarPosition:'bottom',
           items:[
               {
                  xtype:'retencion iva',
                   label:'ingresa daros',
                   items:[
                      panelInicio
                   ]
               },
               {
                   xtype:'isr',
                   label:'ingresa datos',
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
          
        
           



    





            





    


