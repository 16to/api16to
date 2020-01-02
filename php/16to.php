<?php
    require '../app.php';
    require '../system/system_tree.php';
    //不知道为什么就是需要增加new DB才能使用
    new DB();
    //获取所有技术总结
    function skill_all(){
        $con=array();
        $con['1']=1;
        $con['order']="by sort desc,addtime desc";
        $r=DB::Select("skill",$con);
        echo json_encode($r);
    }
    //获取所有技术TAG
    function skill_tag(){
        global $skill_tag_arr;
        echo json_encode($skill_tag_arr);
    }
    //获取所有技术TYPE
    function skill_type(){
        global $skill_arr;
        echo json_encode($skill_arr);
    }
    //获取所有技术总结前5个
    function skill_all_5(){
        $con=array();
        $con['1']=1;
        $con['order']="by sort desc,addtime desc";
        $con['limit']="5";
        $r=DB::Select("skill",$con);
        echo json_encode($r);
    }
    //获取所有技术总结前10个
    function skill_all_10(){
        $con=array();
        $con['1']=1;
        $con['order']="by sort desc,addtime desc";
        $con['limit']="10";
        $r=DB::Select("skill",$con);
        echo json_encode($r);
    }
    //获取所有技术by tag
    function skill_all_tag($tag){
        $con=array();
        $con['1']=1;
        $con['order']="by sort desc,addtime desc";
        $con['tag']=$tag;
        $r=DB::Select("skill",$con);
        echo json_encode($r);
    }
    //获取所有技术by type
    function skill_all_type($type){
        $con=array();
        $con['1']=1;
        $con['order']="by sort desc,addtime desc";
        $con['type']=$type;
        $r=DB::Select("skill",$con);
        echo json_encode($r);
    }
    //获取所有技术by hot
    function skill_all_hot(){
        $con=array();
        $con['1']=1;
        $con['order']="by click desc,addtime desc";
        $r=DB::Select("skill",$con);
        echo json_encode($r);
    }
    //获取详细技术总结
    function skill_detail($id){
        DB::SetInc("skill","click","id=".$id);
        $temp=DB::mysql_select("skill", "id='{$id}'");
        $r=$temp[0];
        echo json_encode($r);
    }
    //所有的搜索结果
    function search_all($s){
        $r=DB::mysql_select("skill", "title like '%".trim($s)."%' or content like '%".trim($s)."%'","*","addtime desc");
        echo json_encode($r);
    }
    //获取所有的专题
    function special_all(){
        $con=array();
        $con['1']=1;
        $con['order']="by sort desc,addtime desc";
        $r=DB::Select("special",$con);
        echo json_encode($r);
    }
    //获取所有的专题前4
    function special_all_4(){
        $con=array();
        $con['1']=1;
        $con['order']="by click desc,sort desc";
        $con['limit']="4";
        $r=DB::Select("special",$con);
        echo json_encode($r);
    }
    //获取所有的专题
    function special_all_type($type){
        $con=array();
        $con['1']=1;
        $con['order']="by sort desc,addtime desc";
        $con['type']=$type;
        $r=DB::Select("special",$con);
        echo json_encode($r);
    }
    //获取详细专题
    function special_detail($id){
        DB::SetInc("special","click","id=".$id);
        $temp=DB::mysql_select("special", "id='{$id}'");
        $r=$temp[0];
        echo json_encode($r);
    }
    //获取体系
    function tree_all(){
        system_tree();
    }
    //获取workall
    function works_all(){
        $con=array();
        $con['1']=1;
        $con['order']="by sort desc,addtime desc";
        $r=DB::Select("works",$con);
        echo json_encode($r);
    }
?>