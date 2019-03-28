<template>
  <div>
    <div class="section">
      <div class="location">
        <span>当前位置：</span>
        <a href="/index.html">首页</a> &gt;
        <a href="/goods.html">购物商城</a> &gt;
        <a href="/goods/42/1.html">商品详情</a>
      </div>
    </div>
    <div class="section">
      <div class="wrapper clearfix">
        <div class="wrap-box">
          <div class="left-925">
            <div class="goods-box clearfix">
              <div class="pic-box">
                <el-carousel>
                  <el-carousel-item v-for="(item,index) in imglist" :key="index">
                    <img :src="item.original_path" alt>
                  </el-carousel-item>
                </el-carousel>
              </div>
              <div class="goods-spec">
                <h1>{{goodsinfo.title}}</h1>
                <p class="subtitle">{{goodsinfo.sub_title}}</p>
                <div class="spec-box">
                  <dl>
                    <dt>货号</dt>
                    <dd id="commodityGoodsNo">{{goodsinfo.goods_no}}</dd>
                  </dl>
                  <dl>
                    <dt>市场价</dt>
                    <dd>
                      <s id="commodityMarketPrice">¥{{goodsinfo.market_price}}</s>
                    </dd>
                  </dl>
                  <dl>
                    <dt>销售价</dt>
                    <dd>
                      <em id="commoditySellPrice" class="price">¥{{goodsinfo.sell_price}}</em>
                    </dd>
                  </dl>
                </div>
                <div class="spec-box">
                  <dl>
                    <dt>购买数量</dt>
                    <dd>
                      <div class="stock-box">
                        <el-input-number
                          size="mini"
                          v-model="num1"
                          @change="handleChange"
                          :min="1"
                          :max="99"
                          label="描述文字"
                        ></el-input-number>
                      </div>
                      <span class="stock-txt">
                        库存
                        <em id="commodityStockNum">{{goodsinfo.stock_quantity}}</em>件
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dd>
                      <div id="buyButton" class="btn-buy">
                        <button onclick="cartAdd(this,'/',1,'/shopping.html');" class="buy">立即购买</button>
                        <button onclick="cartAdd(this,'/',0,'/cart.html');" class="add">加入购物车</button>
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div id="goodsTabs" class="goods-tab bg-wrap">
              <div
                id="tabHead"
                class="tab-head"
                style="position: static; top: 517px; width: 925px;"
              >
                <ul>
                  <li>
                    <a href="javascript:;" @click="index=1" :class="{selected:index==1}">商品介绍</a>
                  </li>
                  <li>
                    <a href="javascript:;" @click="index=2" :class="{selected:index==2}">商品评论</a>
                  </li>
                </ul>
              </div>
              <!-- 内容 -->
              <div class="tab-content entry" v-show="index==1" v-html="goodsinfo.content"></div>
              <!-- 评论 -->
              <div class="tab-content" v-show="index==2">
                <div class="comment-box">
                  <div id="commentForm" name="commentForm" class="form-box">
                    <div class="avatar-box">
                      <i class="iconfont icon-user-full"></i>
                    </div>
                    <div class="conn-box">
                      <div class="editor">
                        <textarea
                          id="txtContent"
                          name="txtContent"
                          sucmsg=" "
                          data-type="*10-1000"
                          nullmsg="请填写评论内容！"
                          v-model="comment"
                        ></textarea>
                        <span class="Validform_checktip"></span>
                      </div>
                      <div class="subcon">
                        <input
                          id="btnSubmit"
                          name="submit"
                          type="submit"
                          value="提交评论"
                          class="submit"
                          @click="postComment"
                        >
                        <span class="Validform_checktip"></span>
                      </div>
                    </div>
                  </div>
                  <ul id="commentList" class="list-box">
                    <p
                      style="margin: 5px 0px 15px 69px; line-height: 42px; text-align: center; border: 1px solid rgb(247, 247, 247);"
                      v-show="totalcount===0"
                    >暂无评论，快来抢沙发吧！</p>
                    <li v-for="(item,index) in commentList" :key="index">
                      <div class="avatar-box">
                        <i class="iconfont icon-user-full"></i>
                      </div>
                      <div class="inner-box">
                        <div class="info">
                          <span>{{item.user_name}}</span>
                          <span>{{item.reply_time | golbalFormatTime}}</span>
                        </div>
                        <p>{{item.content}}</p>
                      </div>
                    </li>
                  </ul>
                  <div class="page-box" style="margin: 5px 0px 0px 62px;">
                    <el-pagination
                      @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :current-page="pageIndex"
                      :page-sizes="[10, 20, 30, 40]"
                      :page-size="pageSize"
                      layout="total, sizes, prev, pager, next, jumper"
                      :total="totalcount"
                    ></el-pagination>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="left-220">
            <div class="bg-wrap nobg">
              <div class="sidebar-box">
                <h4>推荐商品</h4>
                <ul class="side-img-list">
                  <li v-for="(item,index) in hotgoodslist" :key="index">
                    <div class="img-box">
                      <!-- <a :href="'#/site/goodsinfo/'+item.id" class> -->
                      <router-link :to="'/detail/'+item.id">
                        <img :src="item.img_url">
                      </router-link>
                      <!-- </a> -->
                    </div>
                    <div class="txt-box">
                      <!-- <a href="#/site/goodsinfo/90" class> -->
                      <router-link :to="'/detail/'+item.id">{{item.title}}</router-link>
                      <!-- </a> -->
                      <span>{{item.add_time | golbalFormatTime}}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import moment from "moment";
export default {
  name: "detail",
  data() {
    return {
      //商品详情
      goodsinfo: {},
      //推荐商品
      hotgoodslist: [],
      num1: 1,
      imglist: [],
      //评论内容
      comment: "",
      //总条数
      totalcount: 0,
      //页容量
      pageSize: 10,
      //页码
      pageIndex: 1,
      //评论组
      commentList: [],
      //tab 索引
      index: 1
    };
  },
  // filters: {
  //   newTime(value) {
  //     return moment(value).format("YYYY-MM-DD");
  //   }
  //   // replyTime(value) {
  //   //   return moment(value).format("YYYY-MM-DD HH:mm");
  //   // }
  // },
  methods: {
    //商品信息
    getdetail() {
      this.$axios
        .get(`site/goods/getgoodsinfo/${this.$route.params.id}`)
        .then(res => {
          // console.log(res);
          this.goodsinfo = res.data.message.goodsinfo;
          this.hotgoodslist = res.data.message.hotgoodslist;
          //商品图片
          this.imglist = res.data.message.imglist;
        });
    },
    //渲染评论
    getcomment() {
      this.$axios
        .get(
          `site/comment/getbypage/goods/${this.$route.params.id}?pageIndex=${
            this.pageIndex
          }&pageSize=${this.pageSize}`
        )
        .then(res => {
          // console.log(res);
          //评论内容
          this.commentList = res.data.message;
          //总条数
          this.totalcount = res.data.totalcount;
        });
    },
    handleChange() {
      console.log("点我了");
    },
    //评论
    postComment() {
      if (this.comment === "") {
        this.$message({
          message: "内容不能为空!!!"
        });
      } else {
        this.$axios
          .post(`site/validate/comment/post/goods/${this.$route.params.id}`, {
            commenttxt: this.comment
          })
          .then(res => {
            if (res.data.status === 0) {
              this.$message.success(res.data.message);
              this.getcomment();
              this.comment = "";
              this.pageIndex=1;
            }
          });
      }
    },
    handleSizeChange(size){
      this.pageSize=size;
      this.getcomment();
    },
    handleCurrentChange(current){
      this.pageIndex=current;
       this.getcomment();
    }
    
  },
  created() {
    //商品信息
    this.getdetail();

    //商品评论
    this.getcomment();
  },
  //侦听器
  watch: {
    $route() {
      this.getdetail();
    }
  }
};
</script>

<style>
.pic-box {
  width: 300px;
  height: 100%;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.pic-box .el-carousel {
  width: 100%;
  height: 100%;
}
.pic-box .el-carousel__container img {
  margin: 0 auto;
  display: block;
  width: 90%;
  height: 100%;
}
.pic-box .el-carousel__indicators button {
  background-color: #ccc;
}
</style>
