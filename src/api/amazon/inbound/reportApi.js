import request from "@/utils/request";
import downloadhandler from "@/utils/download-handler";
function getShipmentReportByLoistics(data){ 
	 return request.post('/amazon/api/v1/ship/report/getShipmentReportByLoistics',data);
}
function getShipmentDetailReport(data){ 
	 return request.post('/amazon/api/v1/ship/report/getShipmentDetailReport',data);
}
function getShipmentReport(data){ 
	 return request.post('/amazon/api/v1/ship/report/getShipmentReport',data);
}
 function downShipmentExcel(data,callback){
 	return request({url:"/amazon/api/v1/ship/report/downShipmentExcel",
 				                    responseType:"blob",
 									data:data,
 									method:'post'}).then(res => {
 											downloadhandler.downloadSuccess(res,"shipmentReport.xlsx")
 											if(callback){
 												callback();
 											}
 									}).catch(e=>{
 											downloadhandler.downloadFail(e);
 											if(callback){
 												callback();
 											}
 									}); 
 }
 function downExcelShipmentReportByLoistics(data,callback){
 	return request({url:"/amazon/api/v1/ship/report/downExcelShipmentReportByLoistics",
 				                    responseType:"blob",
 									data:data,
 									method:'post'}).then(res => {
 											downloadhandler.downloadSuccess(res,"shipmentLogisticsReport.xlsx")
 											if(callback){
 												callback();
 											}
 									}).catch(e=>{
 											downloadhandler.downloadFail(e);
 											if(callback){
 												callback();
 											}
 									}); 
 }
 
 
 

export default{
	 getShipmentReportByLoistics,getShipmentDetailReport,getShipmentReport,downShipmentExcel,downExcelShipmentReportByLoistics
}