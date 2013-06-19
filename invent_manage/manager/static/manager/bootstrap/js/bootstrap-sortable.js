  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>bootstrap-sortable/Scripts/bootstrap-sortable.js at master · drvic10k/bootstrap-sortable · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <link rel="assets" href="https://a248.e.akamai.net/assets.github.com/">
    <link rel="xhr-socket" href="/_sockets" />
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="skEJ0m4qxBB9RX/bEMUlxW5Uf+ayHr7ItN6xq6Yijlw=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-7bd58f561e043e3f5ff1dd3f57f18b73398fc10c.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-69d2c2a7108294a10da9659f618a66336ea17053.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-4c434fa1705bf526e191eec0cd8fab1a5ce3e326.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-5e72c8897c5b4f51f6829429a2f0045853a2cf36.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="f646f8aa8bf3cfc9d6c820bfea6bf458">

        <link data-pjax-transient rel='permalink' href='/drvic10k/bootstrap-sortable/blob/b7769601252f6f1f5d7fda1ebfd35792a647cd92/Scripts/bootstrap-sortable.js'>
    <meta property="og:title" content="bootstrap-sortable"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/drvic10k/bootstrap-sortable"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/0a23a9e8b00771461a441f4d38faa08d?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="bootstrap-sortable - adding sorting ability to bootstrap table"/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="drvic10k/bootstrap-sortable"/>

    <meta name="description" content="bootstrap-sortable - adding sorting ability to bootstrap table" />


    <meta content="3754571" name="octolytics-dimension-user_id" /><meta content="drvic10k" name="octolytics-dimension-user_login" /><meta content="8534533" name="octolytics-dimension-repository_id" /><meta content="drvic10k/bootstrap-sortable" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="8534533" name="octolytics-dimension-repository_network_root_id" /><meta content="drvic10k/bootstrap-sortable" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/drvic10k/bootstrap-sortable/commits/master.atom" rel="alternate" title="Recent Commits to bootstrap-sortable:master" type="application/atom+xml" />

  </head>


  <body class="logged_out page-blob windows vis-public env-production  ">
    <div id="wrapper">

      
      
      

      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">Github</a>

    <div class="header-actions">
      <a class="button primary" href="/signup">Sign up</a>
      <a class="button" href="/login?return_to=%2Fdrvic10k%2Fbootstrap-sortable%2Fblob%2Fmaster%2FScripts%2Fbootstrap-sortable.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">


      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="http://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">
  <a href="/search/advanced" class="advanced-search-icon tooltipped downwards command-bar-search" id="advanced_search" title="Advanced search"><span class="octicon octicon-gear "></span></a>

  <input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
      data-repo="drvic10k/bootstrap-sortable"
      data-branch="master"
      data-sha="c8a619b6bed4613e73a050190339d7fd6a7701f9"
  >

    <input type="hidden" name="nwo" value="drvic10k/bootstrap-sortable" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

  <div class="divider-vertical"></div>

</form>
    </div>

  </div>
</div>


      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu ">
          <div class="container">
            <div class="title-actions-bar">
              

<ul class="pagehead-actions">



    <li>
      <a href="/login?return_to=%2Fdrvic10k%2Fbootstrap-sortable"
        class="minibutton with-count js-toggler-target star-button entice tooltipped upwards"
        title="You must be signed in to use this feature" rel="nofollow">
        <span class="octicon octicon-star"></span>Star
      </a>
      <a class="social-count js-social-count" href="/drvic10k/bootstrap-sortable/stargazers">
        18
      </a>
    </li>
    <li>
      <a href="/login?return_to=%2Fdrvic10k%2Fbootstrap-sortable"
        class="minibutton with-count js-toggler-target fork-button entice tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/drvic10k/bootstrap-sortable/network" class="social-count">
        10
      </a>
    </li>
</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-octicon octicon-repo"></span>
                <span class="author vcard">
                  <a href="/drvic10k" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">drvic10k</span>
                  </a></span> /
                <strong><a href="/drvic10k/bootstrap-sortable" class="js-current-repository">bootstrap-sortable</a></strong>
              </h1>
            </div>

            
  <ul class="tabs">
    <li class="pulse-nav"><a href="/drvic10k/bootstrap-sortable/pulse" class="js-selected-navigation-item " data-selected-links="pulse /drvic10k/bootstrap-sortable/pulse" rel="nofollow"><span class="octicon octicon-pulse"></span></a></li>
    <li><a href="/drvic10k/bootstrap-sortable" class="js-selected-navigation-item selected" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /drvic10k/bootstrap-sortable">Code</a></li>
    <li><a href="/drvic10k/bootstrap-sortable/network" class="js-selected-navigation-item " data-selected-links="repo_network /drvic10k/bootstrap-sortable/network">Network</a></li>
    <li><a href="/drvic10k/bootstrap-sortable/pulls" class="js-selected-navigation-item " data-selected-links="repo_pulls /drvic10k/bootstrap-sortable/pulls">Pull Requests <span class='counter'>0</span></a></li>

      <li><a href="/drvic10k/bootstrap-sortable/issues" class="js-selected-navigation-item " data-selected-links="repo_issues /drvic10k/bootstrap-sortable/issues">Issues <span class='counter'>0</span></a></li>

      <li><a href="/drvic10k/bootstrap-sortable/wiki" class="js-selected-navigation-item " data-selected-links="repo_wiki /drvic10k/bootstrap-sortable/wiki">Wiki</a></li>


    <li><a href="/drvic10k/bootstrap-sortable/graphs" class="js-selected-navigation-item " data-selected-links="repo_graphs repo_contributors /drvic10k/bootstrap-sortable/graphs">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/drvic10k/bootstrap-sortable/tags" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_tags /drvic10k/bootstrap-sortable/tags">Tags <span class="counter blank">0</span></a></li>
    </ul>
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="octicon octicon-git-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">

        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div>
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches">

            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item selected">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/drvic10k/bootstrap-sortable/blob/master/Scripts/bootstrap-sortable.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
                </div> <!-- /.select-menu-item -->
            </div>

              <div class="select-menu-no-results">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags">
            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

            </div>

            <div class="select-menu-no-results">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/drvic10k/bootstrap-sortable" class="selected js-selected-navigation-item tabnav-tab" data-selected-links="repo_source /drvic10k/bootstrap-sortable">Files</a></li>
    <li><a href="/drvic10k/bootstrap-sortable/commits/master" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_commits /drvic10k/bootstrap-sortable/commits/master">Commits</a></li>
    <li><a href="/drvic10k/bootstrap-sortable/branches" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_branches /drvic10k/bootstrap-sortable/branches" rel="nofollow">Branches <span class="counter ">1</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:f40045f1f2a74dc94314a37874534d47 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:f40045f1f2a74dc94314a37874534d47 -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/drvic10k/bootstrap-sortable" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">bootstrap-sortable</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/drvic10k/bootstrap-sortable/tree/master/Scripts" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">Scripts</span></a></span><span class="separator"> / </span><strong class="final-path">bootstrap-sortable.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="Scripts/bootstrap-sortable.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
        </div>

      <a href="/drvic10k/bootstrap-sortable/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/0a23a9e8b00771461a441f4d38faa08d?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/drvic10k" rel="author">drvic10k</a></span>
    <time class="js-relative-date" datetime="2013-06-16T14:10:38-07:00" title="2013-06-16 14:10:38">June 16, 2013</time>
    <div class="commit-title">
        <a href="/drvic10k/bootstrap-sortable/commit/b7769601252f6f1f5d7fda1ebfd35792a647cd92" class="message">Preserve sorting, when you modify the table</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/0a23a9e8b00771461a441f4d38faa08d?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/drvic10k">drvic10k</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/drvic10k/bootstrap-sortable/blob/b7769601252f6f1f5d7fda1ebfd35792a647cd92/Scripts/bootstrap-sortable.js" data-title="bootstrap-sortable/Scripts/bootstrap-sortable.js at master · drvic10k/bootstrap-sortable · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="octicon octicon-file-text"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>79 lines (68 sloc)</span>
                <span>6.448 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                      <a class="minibutton js-entice" href=""
                         data-entice="You must be signed in and on a branch to make or propose changes">Edit</a>
                  <a href="/drvic10k/bootstrap-sortable/raw/master/Scripts/bootstrap-sortable.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/drvic10k/bootstrap-sortable/blame/master/Scripts/bootstrap-sortable.js" class="button minibutton ">Blame</a>
                  <a href="/drvic10k/bootstrap-sortable/commits/master/Scripts/bootstrap-sortable.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/* TINY SORT modified according to this https://github.com/Sjeiti/TinySort/pull/51*/</span></div><div class='line' id='LC2'><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">t</span><span class="p">)</span> <span class="p">{</span> <span class="kd">function</span> <span class="nx">h</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">e</span> <span class="o">&amp;&amp;</span> <span class="nx">e</span><span class="p">.</span><span class="nx">toLowerCase</span> <span class="o">?</span> <span class="nx">e</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span> <span class="o">:</span> <span class="nx">e</span> <span class="p">}</span> <span class="kd">function</span> <span class="nx">p</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">t</span><span class="p">)</span> <span class="p">{</span> <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">r</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">i</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">r</span> <span class="o">&lt;</span> <span class="nx">i</span><span class="p">;</span> <span class="nx">r</span><span class="o">++</span><span class="p">)</span> <span class="k">if</span> <span class="p">(</span><span class="nx">e</span><span class="p">[</span><span class="nx">r</span><span class="p">]</span> <span class="o">==</span> <span class="nx">t</span><span class="p">)</span> <span class="k">return</span> <span class="o">!</span><span class="nx">n</span><span class="p">;</span> <span class="k">return</span> <span class="nx">n</span> <span class="p">}</span> <span class="kd">var</span> <span class="nx">n</span> <span class="o">=</span> <span class="o">!</span><span class="mi">1</span><span class="p">,</span> <span class="nx">r</span> <span class="o">=</span> <span class="kc">null</span><span class="p">,</span> <span class="nx">i</span> <span class="o">=</span> <span class="nb">parseFloat</span><span class="p">,</span> <span class="nx">s</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">,</span> <span class="nx">o</span> <span class="o">=</span> <span class="sr">/(-?\d+\.?\d*)$/g</span><span class="p">,</span> <span class="nx">u</span> <span class="o">=</span> <span class="sr">/(\d+\.?\d*)$/g</span><span class="p">,</span> <span class="nx">a</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">f</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">l</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="k">typeof</span> <span class="nx">e</span> <span class="o">==</span> <span class="s2">&quot;string&quot;</span> <span class="p">},</span> <span class="nx">c</span> <span class="o">=</span> <span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">indexOf</span> <span class="o">||</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span> <span class="kd">var</span> <span class="nx">t</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span> <span class="nx">n</span> <span class="o">=</span> <span class="nb">Number</span><span class="p">(</span><span class="nx">arguments</span><span class="p">[</span><span class="mi">1</span><span class="p">])</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">n</span> <span class="o">=</span> <span class="nx">n</span> <span class="o">&lt;</span> <span class="mi">0</span> <span class="o">?</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">ceil</span><span class="p">(</span><span class="nx">n</span><span class="p">)</span> <span class="o">:</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">n</span><span class="p">);</span> <span class="k">if</span> <span class="p">(</span><span class="nx">n</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="nx">n</span> <span class="o">+=</span> <span class="nx">t</span><span class="p">;</span> <span class="k">for</span> <span class="p">(;</span> <span class="nx">n</span> <span class="o">&lt;</span> <span class="nx">t</span><span class="p">;</span> <span class="nx">n</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span> <span class="k">if</span> <span class="p">(</span><span class="nx">n</span> <span class="k">in</span> <span class="k">this</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">[</span><span class="nx">n</span><span class="p">]</span> <span class="o">===</span> <span class="nx">e</span><span class="p">)</span> <span class="k">return</span> <span class="nx">n</span> <span class="p">}</span> <span class="k">return</span> <span class="o">-</span><span class="mi">1</span> <span class="p">};</span> <span class="nx">e</span><span class="p">.</span><span class="nx">tinysort</span> <span class="o">=</span> <span class="p">{</span> <span class="nx">id</span><span class="o">:</span> <span class="s2">&quot;TinySort&quot;</span><span class="p">,</span> <span class="nx">version</span><span class="o">:</span> <span class="s2">&quot;1.5.2&quot;</span><span class="p">,</span> <span class="nx">copyright</span><span class="o">:</span> <span class="s2">&quot;Copyright (c) 2008-2013 Ron Valstar&quot;</span><span class="p">,</span> <span class="nx">uri</span><span class="o">:</span> <span class="s2">&quot;http://tinysort.sjeiti.com/&quot;</span><span class="p">,</span> <span class="nx">licensed</span><span class="o">:</span> <span class="p">{</span> <span class="nx">MIT</span><span class="o">:</span> <span class="s2">&quot;http://www.opensource.org/licenses/mit-license.php&quot;</span><span class="p">,</span> <span class="nx">GPL</span><span class="o">:</span> <span class="s2">&quot;http://www.gnu.org/licenses/gpl.html&quot;</span> <span class="p">},</span> <span class="nx">plugin</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span> <span class="kd">var</span> <span class="nx">e</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">t</span><span class="p">)</span> <span class="p">{</span> <span class="nx">a</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span> <span class="nx">f</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">t</span><span class="p">)</span> <span class="p">};</span> <span class="nx">e</span><span class="p">.</span><span class="nx">indexOf</span> <span class="o">=</span> <span class="nx">c</span><span class="p">;</span> <span class="k">return</span> <span class="nx">e</span> <span class="p">}(),</span> <span class="nx">defaults</span><span class="o">:</span> <span class="p">{</span> <span class="nx">order</span><span class="o">:</span> <span class="s2">&quot;asc&quot;</span><span class="p">,</span> <span class="nx">attr</span><span class="o">:</span> <span class="nx">r</span><span class="p">,</span> <span class="nx">data</span><span class="o">:</span> <span class="nx">r</span><span class="p">,</span> <span class="nx">useVal</span><span class="o">:</span> <span class="nx">n</span><span class="p">,</span> <span class="nx">place</span><span class="o">:</span> <span class="s2">&quot;start&quot;</span><span class="p">,</span> <span class="nx">returns</span><span class="o">:</span> <span class="nx">n</span><span class="p">,</span> <span class="nx">cases</span><span class="o">:</span> <span class="nx">n</span><span class="p">,</span> <span class="nx">forceStrings</span><span class="o">:</span> <span class="nx">n</span><span class="p">,</span> <span class="nx">ignoreDashes</span><span class="o">:</span> <span class="nx">n</span><span class="p">,</span> <span class="nx">sortFunction</span><span class="o">:</span> <span class="nx">r</span> <span class="p">}</span> <span class="p">};</span> <span class="nx">e</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span> <span class="nx">tinysort</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span> <span class="kd">var</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">v</span><span class="p">,</span> <span class="nx">m</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span> <span class="nx">g</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">y</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">b</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">w</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">E</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">S</span><span class="p">,</span> <span class="nx">x</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">T</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">N</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">t</span><span class="p">)</span> <span class="p">{</span> <span class="nx">e</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">n</span><span class="p">)</span> <span class="p">{</span> <span class="nx">n</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">n</span><span class="p">,</span> <span class="nx">t</span><span class="p">)</span> <span class="p">})</span> <span class="p">},</span> <span class="nx">C</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">t</span><span class="p">,</span> <span class="nx">r</span><span class="p">)</span> <span class="p">{</span> <span class="kd">var</span> <span class="nx">s</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="k">if</span> <span class="p">(</span><span class="nx">E</span> <span class="o">!==</span> <span class="mi">0</span><span class="p">)</span> <span class="nx">E</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="k">while</span> <span class="p">(</span><span class="nx">s</span> <span class="o">===</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">E</span> <span class="o">&lt;</span> <span class="nx">S</span><span class="p">)</span> <span class="p">{</span> <span class="kd">var</span> <span class="nx">a</span> <span class="o">=</span> <span class="nx">w</span><span class="p">[</span><span class="nx">E</span><span class="p">],</span> <span class="nx">c</span> <span class="o">=</span> <span class="nx">a</span><span class="p">.</span><span class="nx">oSettings</span><span class="p">,</span> <span class="nx">p</span> <span class="o">=</span> <span class="nx">c</span><span class="p">.</span><span class="nx">ignoreDashes</span> <span class="o">?</span> <span class="nx">u</span> <span class="o">:</span> <span class="nx">o</span><span class="p">;</span> <span class="nx">N</span><span class="p">(</span><span class="nx">c</span><span class="p">);</span> <span class="k">if</span> <span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">sortFunction</span><span class="p">)</span> <span class="p">{</span> <span class="nx">s</span> <span class="o">=</span> <span class="nx">c</span><span class="p">.</span><span class="nx">sortFunction</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span> <span class="nx">r</span><span class="p">)</span> <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">order</span> <span class="o">==</span> <span class="s2">&quot;rand&quot;</span><span class="p">)</span> <span class="p">{</span> <span class="nx">s</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">random</span><span class="p">()</span> <span class="o">&lt;</span> <span class="p">.</span><span class="mi">5</span> <span class="o">?</span> <span class="mi">1</span> <span class="o">:</span> <span class="o">-</span><span class="mi">1</span> <span class="p">}</span> <span class="k">else</span> <span class="p">{</span> <span class="kd">var</span> <span class="nx">d</span> <span class="o">=</span> <span class="nx">n</span><span class="p">,</span> <span class="nx">v</span> <span class="o">=</span> <span class="o">!</span><span class="nx">c</span><span class="p">.</span><span class="nx">cases</span> <span class="o">?</span> <span class="nx">h</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">s</span><span class="p">[</span><span class="nx">E</span><span class="p">])</span> <span class="o">:</span> <span class="nx">t</span><span class="p">.</span><span class="nx">s</span><span class="p">[</span><span class="nx">E</span><span class="p">],</span> <span class="nx">m</span> <span class="o">=</span> <span class="o">!</span><span class="nx">c</span><span class="p">.</span><span class="nx">cases</span> <span class="o">?</span> <span class="nx">h</span><span class="p">(</span><span class="nx">r</span><span class="p">.</span><span class="nx">s</span><span class="p">[</span><span class="nx">E</span><span class="p">])</span> <span class="o">:</span> <span class="nx">r</span><span class="p">.</span><span class="nx">s</span><span class="p">[</span><span class="nx">E</span><span class="p">];</span> <span class="nx">v</span> <span class="o">=</span> <span class="nx">v</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^\s*/i</span><span class="p">,</span> <span class="s2">&quot;&quot;</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\s*$/i</span><span class="p">,</span> <span class="s2">&quot;&quot;</span><span class="p">);</span> <span class="nx">m</span> <span class="o">=</span> <span class="nx">m</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^\s*/i</span><span class="p">,</span> <span class="s2">&quot;&quot;</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\s*$/i</span><span class="p">,</span> <span class="s2">&quot;&quot;</span><span class="p">);</span> <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">A</span><span class="p">.</span><span class="nx">forceStrings</span><span class="p">)</span> <span class="p">{</span> <span class="kd">var</span> <span class="nx">g</span> <span class="o">=</span> <span class="nx">l</span><span class="p">(</span><span class="nx">v</span><span class="p">)</span> <span class="o">?</span> <span class="nx">v</span> <span class="o">&amp;&amp;</span> <span class="nx">v</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">p</span><span class="p">)</span> <span class="o">:</span> <span class="nx">n</span><span class="p">,</span> <span class="nx">y</span> <span class="o">=</span> <span class="nx">l</span><span class="p">(</span><span class="nx">m</span><span class="p">)</span> <span class="o">?</span> <span class="nx">m</span> <span class="o">&amp;&amp;</span> <span class="nx">m</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">p</span><span class="p">)</span> <span class="o">:</span> <span class="nx">n</span><span class="p">;</span> <span class="k">if</span> <span class="p">(</span><span class="nx">g</span> <span class="o">&amp;&amp;</span> <span class="nx">y</span><span class="p">)</span> <span class="p">{</span> <span class="kd">var</span> <span class="nx">b</span> <span class="o">=</span> <span class="nx">v</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">v</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="nx">g</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">),</span> <span class="nx">x</span> <span class="o">=</span> <span class="nx">m</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">m</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="nx">y</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">);</span> <span class="k">if</span> <span class="p">(</span><span class="nx">b</span> <span class="o">==</span> <span class="nx">x</span><span class="p">)</span> <span class="p">{</span> <span class="nx">d</span> <span class="o">=</span> <span class="o">!</span><span class="nx">n</span><span class="p">;</span> <span class="nx">v</span> <span class="o">=</span> <span class="nx">i</span><span class="p">(</span><span class="nx">g</span><span class="p">[</span><span class="mi">0</span><span class="p">]);</span> <span class="nx">m</span> <span class="o">=</span> <span class="nx">i</span><span class="p">(</span><span class="nx">y</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="p">}</span> <span class="p">}</span> <span class="p">}</span> <span class="nx">s</span> <span class="o">=</span> <span class="nx">a</span><span class="p">.</span><span class="nx">iAsc</span> <span class="o">*</span> <span class="p">(</span><span class="nx">v</span> <span class="o">&lt;</span> <span class="nx">m</span> <span class="o">?</span> <span class="o">-</span><span class="mi">1</span> <span class="o">:</span> <span class="nx">v</span> <span class="o">&gt;</span> <span class="nx">m</span> <span class="o">?</span> <span class="mi">1</span> <span class="o">:</span> <span class="mi">0</span><span class="p">)</span> <span class="p">}</span> <span class="nx">e</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">f</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">t</span><span class="p">)</span> <span class="p">{</span> <span class="nx">s</span> <span class="o">=</span> <span class="nx">t</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">v</span><span class="p">,</span> <span class="nx">m</span><span class="p">,</span> <span class="nx">s</span><span class="p">)</span> <span class="p">});</span> <span class="k">if</span> <span class="p">(</span><span class="nx">s</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="nx">E</span><span class="o">++</span> <span class="p">}</span> <span class="k">return</span> <span class="nx">s</span> <span class="p">};</span> <span class="k">for</span> <span class="p">(</span><span class="nx">d</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">v</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">d</span> <span class="o">&lt;</span> <span class="nx">v</span><span class="p">;</span> <span class="nx">d</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span> <span class="kd">var</span> <span class="nx">k</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">[</span><span class="nx">d</span><span class="p">];</span> <span class="k">if</span> <span class="p">(</span><span class="nx">l</span><span class="p">(</span><span class="nx">k</span><span class="p">))</span> <span class="p">{</span> <span class="k">if</span> <span class="p">(</span><span class="nx">x</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">k</span><span class="p">)</span> <span class="o">-</span> <span class="mi">1</span> <span class="o">&gt;</span> <span class="nx">T</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="nx">T</span><span class="p">.</span><span class="nx">length</span> <span class="o">=</span> <span class="nx">x</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span> <span class="p">}</span> <span class="k">else</span> <span class="p">{</span> <span class="k">if</span> <span class="p">(</span><span class="nx">T</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">k</span><span class="p">)</span> <span class="o">&gt;</span> <span class="nx">x</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="nx">x</span><span class="p">.</span><span class="nx">length</span> <span class="o">=</span> <span class="nx">T</span><span class="p">.</span><span class="nx">length</span> <span class="p">}</span> <span class="p">}</span> <span class="k">if</span> <span class="p">(</span><span class="nx">x</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="nx">T</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="nx">T</span><span class="p">.</span><span class="nx">length</span> <span class="o">=</span> <span class="nx">x</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">S</span> <span class="o">=</span> <span class="nx">x</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="k">if</span> <span class="p">(</span><span class="nx">S</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span> <span class="nx">S</span> <span class="o">=</span> <span class="nx">x</span><span class="p">.</span><span class="nx">length</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">T</span><span class="p">.</span><span class="nx">push</span><span class="p">({})</span> <span class="p">}</span> <span class="k">for</span> <span class="p">(</span><span class="nx">d</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">v</span> <span class="o">=</span> <span class="nx">S</span><span class="p">;</span> <span class="nx">d</span> <span class="o">&lt;</span> <span class="nx">v</span><span class="p">;</span> <span class="nx">d</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span> <span class="kd">var</span> <span class="nx">L</span> <span class="o">=</span> <span class="nx">x</span><span class="p">[</span><span class="nx">d</span><span class="p">],</span> <span class="nx">A</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="nx">e</span><span class="p">.</span><span class="nx">tinysort</span><span class="p">.</span><span class="nx">defaults</span><span class="p">,</span> <span class="nx">T</span><span class="p">[</span><span class="nx">d</span><span class="p">]),</span> <span class="nx">O</span> <span class="o">=</span> <span class="o">!</span><span class="p">(</span><span class="o">!</span><span class="nx">L</span> <span class="o">||</span> <span class="nx">L</span> <span class="o">==</span> <span class="s2">&quot;&quot;</span><span class="p">),</span> <span class="nx">M</span> <span class="o">=</span> <span class="nx">O</span> <span class="o">&amp;&amp;</span> <span class="nx">L</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">==</span> <span class="s2">&quot;:&quot;</span><span class="p">;</span> <span class="nx">w</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span> <span class="nx">sFind</span><span class="o">:</span> <span class="nx">L</span><span class="p">,</span> <span class="nx">oSettings</span><span class="o">:</span> <span class="nx">A</span><span class="p">,</span> <span class="nx">bFind</span><span class="o">:</span> <span class="nx">O</span><span class="p">,</span> <span class="nx">bAttr</span><span class="o">:</span> <span class="o">!</span><span class="p">(</span><span class="nx">A</span><span class="p">.</span><span class="nx">attr</span> <span class="o">===</span> <span class="nx">r</span> <span class="o">||</span> <span class="nx">A</span><span class="p">.</span><span class="nx">attr</span> <span class="o">==</span> <span class="s2">&quot;&quot;</span><span class="p">),</span> <span class="nx">bData</span><span class="o">:</span> <span class="nx">A</span><span class="p">.</span><span class="nx">data</span> <span class="o">!==</span> <span class="nx">r</span><span class="p">,</span> <span class="nx">bFilter</span><span class="o">:</span> <span class="nx">M</span><span class="p">,</span> <span class="nx">$Filter</span><span class="o">:</span> <span class="nx">M</span> <span class="o">?</span> <span class="nx">m</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="nx">L</span><span class="p">)</span> <span class="o">:</span> <span class="nx">m</span><span class="p">,</span> <span class="nx">fnSort</span><span class="o">:</span> <span class="nx">A</span><span class="p">.</span><span class="nx">sortFunction</span><span class="p">,</span> <span class="nx">iAsc</span><span class="o">:</span> <span class="nx">A</span><span class="p">.</span><span class="nx">order</span> <span class="o">==</span> <span class="s2">&quot;asc&quot;</span> <span class="o">?</span> <span class="mi">1</span> <span class="o">:</span> <span class="o">-</span><span class="mi">1</span> <span class="p">})</span> <span class="p">}</span> <span class="nx">m</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">n</span><span class="p">,</span> <span class="nx">r</span><span class="p">)</span> <span class="p">{</span> <span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="nx">e</span><span class="p">(</span><span class="nx">r</span><span class="p">),</span> <span class="nx">s</span> <span class="o">=</span> <span class="nx">i</span><span class="p">.</span><span class="nx">parent</span><span class="p">().</span><span class="nx">get</span><span class="p">(</span><span class="mi">0</span><span class="p">),</span> <span class="nx">o</span><span class="p">,</span> <span class="nx">u</span> <span class="o">=</span> <span class="p">[];</span> <span class="k">for</span> <span class="p">(</span><span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span> <span class="nx">S</span><span class="p">;</span> <span class="nx">j</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span> <span class="kd">var</span> <span class="nx">a</span> <span class="o">=</span> <span class="nx">w</span><span class="p">[</span><span class="nx">j</span><span class="p">],</span> <span class="nx">f</span> <span class="o">=</span> <span class="nx">a</span><span class="p">.</span><span class="nx">bFind</span> <span class="o">?</span> <span class="nx">a</span><span class="p">.</span><span class="nx">bFilter</span> <span class="o">?</span> <span class="nx">a</span><span class="p">.</span><span class="nx">$Filter</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="nx">r</span><span class="p">)</span> <span class="o">:</span> <span class="nx">i</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">sFind</span><span class="p">)</span> <span class="o">:</span> <span class="nx">i</span><span class="p">;</span> <span class="nx">u</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">bData</span> <span class="o">?</span> <span class="nx">f</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">oSettings</span><span class="p">.</span><span class="nx">data</span><span class="p">)</span> <span class="o">:</span> <span class="nx">a</span><span class="p">.</span><span class="nx">bAttr</span> <span class="o">?</span> <span class="nx">f</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">oSettings</span><span class="p">.</span><span class="nx">attr</span><span class="p">)</span> <span class="o">:</span> <span class="nx">a</span><span class="p">.</span><span class="nx">oSettings</span><span class="p">.</span><span class="nx">useVal</span> <span class="o">?</span> <span class="nx">f</span><span class="p">.</span><span class="nx">val</span><span class="p">()</span> <span class="o">:</span> <span class="nx">f</span><span class="p">.</span><span class="nx">text</span><span class="p">());</span> <span class="k">if</span> <span class="p">(</span><span class="nx">o</span> <span class="o">===</span> <span class="nx">t</span><span class="p">)</span> <span class="nx">o</span> <span class="o">=</span> <span class="nx">f</span> <span class="p">}</span> <span class="kd">var</span> <span class="nx">l</span> <span class="o">=</span> <span class="nx">c</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span> <span class="nx">s</span><span class="p">);</span> <span class="k">if</span> <span class="p">(</span><span class="nx">l</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span> <span class="nx">l</span> <span class="o">=</span> <span class="nx">b</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">s</span><span class="p">)</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">y</span><span class="p">[</span><span class="nx">l</span><span class="p">]</span> <span class="o">=</span> <span class="p">{</span> <span class="nx">s</span><span class="o">:</span> <span class="p">[],</span> <span class="nx">n</span><span class="o">:</span> <span class="p">[]</span> <span class="p">}</span> <span class="p">}</span> <span class="k">if</span> <span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="nx">y</span><span class="p">[</span><span class="nx">l</span><span class="p">].</span><span class="nx">s</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span> <span class="nx">s</span><span class="o">:</span> <span class="nx">u</span><span class="p">,</span> <span class="nx">e</span><span class="o">:</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">n</span><span class="o">:</span> <span class="nx">n</span> <span class="p">});</span> <span class="k">else</span> <span class="nx">y</span><span class="p">[</span><span class="nx">l</span><span class="p">].</span><span class="nx">n</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span> <span class="nx">e</span><span class="o">:</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">n</span><span class="o">:</span> <span class="nx">n</span> <span class="p">})</span> <span class="p">});</span> <span class="nx">e</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">y</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">t</span><span class="p">)</span> <span class="p">{</span> <span class="nx">t</span><span class="p">.</span><span class="nx">s</span><span class="p">.</span><span class="nx">sort</span><span class="p">(</span><span class="nx">C</span><span class="p">)</span> <span class="p">});</span> <span class="nx">e</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">y</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">t</span><span class="p">,</span> <span class="nx">r</span><span class="p">)</span> <span class="p">{</span> <span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="nx">r</span><span class="p">.</span><span class="nx">s</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span> <span class="nx">o</span> <span class="o">=</span> <span class="p">[],</span> <span class="nx">u</span> <span class="o">=</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">a</span> <span class="o">=</span> <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">];</span> <span class="k">switch</span> <span class="p">(</span><span class="nx">A</span><span class="p">.</span><span class="nx">place</span><span class="p">)</span> <span class="p">{</span> <span class="k">case</span> <span class="s2">&quot;first&quot;</span><span class="o">:</span> <span class="nx">e</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">r</span><span class="p">.</span><span class="nx">s</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">t</span><span class="p">)</span> <span class="p">{</span> <span class="nx">u</span> <span class="o">=</span> <span class="nx">s</span><span class="p">(</span><span class="nx">u</span><span class="p">,</span> <span class="nx">t</span><span class="p">.</span><span class="nx">n</span><span class="p">)</span> <span class="p">});</span> <span class="k">break</span><span class="p">;</span> <span class="k">case</span> <span class="s2">&quot;org&quot;</span><span class="o">:</span> <span class="nx">e</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">r</span><span class="p">.</span><span class="nx">s</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">t</span><span class="p">)</span> <span class="p">{</span> <span class="nx">o</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">t</span><span class="p">.</span><span class="nx">n</span><span class="p">)</span> <span class="p">});</span> <span class="k">break</span><span class="p">;</span> <span class="k">case</span> <span class="s2">&quot;end&quot;</span><span class="o">:</span> <span class="nx">u</span> <span class="o">=</span> <span class="nx">r</span><span class="p">.</span><span class="nx">n</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="k">break</span><span class="p">;</span> <span class="k">default</span><span class="o">:</span> <span class="nx">u</span> <span class="o">=</span> <span class="mi">0</span> <span class="p">}</span> <span class="k">for</span> <span class="p">(</span><span class="nx">d</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">d</span> <span class="o">&lt;</span> <span class="nx">i</span><span class="p">;</span> <span class="nx">d</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span> <span class="kd">var</span> <span class="nx">f</span> <span class="o">=</span> <span class="nx">p</span><span class="p">(</span><span class="nx">o</span><span class="p">,</span> <span class="nx">d</span><span class="p">)</span> <span class="o">?</span> <span class="o">!</span><span class="nx">n</span> <span class="o">:</span> <span class="nx">d</span> <span class="o">&gt;=</span> <span class="nx">u</span> <span class="o">&amp;&amp;</span> <span class="nx">d</span> <span class="o">&lt;</span> <span class="nx">u</span> <span class="o">+</span> <span class="nx">r</span><span class="p">.</span><span class="nx">s</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span> <span class="nx">l</span> <span class="o">=</span> <span class="p">(</span><span class="nx">f</span> <span class="o">?</span> <span class="nx">r</span><span class="p">.</span><span class="nx">s</span> <span class="o">:</span> <span class="nx">r</span><span class="p">.</span><span class="nx">n</span><span class="p">)[</span><span class="nx">a</span><span class="p">[</span><span class="nx">f</span> <span class="o">?</span> <span class="mi">0</span> <span class="o">:</span> <span class="mi">1</span><span class="p">]].</span><span class="nx">e</span><span class="p">;</span> <span class="nx">l</span><span class="p">.</span><span class="nx">parent</span><span class="p">().</span><span class="nx">append</span><span class="p">(</span><span class="nx">l</span><span class="p">);</span> <span class="k">if</span> <span class="p">(</span><span class="nx">f</span> <span class="o">||</span> <span class="o">!</span><span class="nx">A</span><span class="p">.</span><span class="nx">returns</span><span class="p">)</span> <span class="nx">g</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">l</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="mi">0</span><span class="p">));</span> <span class="nx">a</span><span class="p">[</span><span class="nx">f</span> <span class="o">?</span> <span class="mi">0</span> <span class="o">:</span> <span class="mi">1</span><span class="p">]</span><span class="o">++</span> <span class="p">}</span> <span class="p">});</span> <span class="nx">m</span><span class="p">.</span><span class="nx">length</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">push</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">m</span><span class="p">,</span> <span class="nx">g</span><span class="p">);</span> <span class="k">return</span> <span class="nx">m</span> <span class="p">}</span> <span class="p">});</span> <span class="nx">e</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">TinySort</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">Tinysort</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">tsort</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">tinysort</span> <span class="p">})(</span><span class="nx">jQuery</span><span class="p">);</span></div><div class='line' id='LC3'><br/></div><div class='line' id='LC4'><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC5'><br/></div><div class='line' id='LC6'>	<span class="kd">var</span> <span class="nx">$document</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">),</span></div><div class='line' id='LC7'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">bsSort</span> <span class="o">=</span> <span class="p">[],</span></div><div class='line' id='LC8'>&nbsp;&nbsp;&nbsp;&nbsp;	<span class="nx">lastSort</span><span class="p">;</span></div><div class='line' id='LC9'><br/></div><div class='line' id='LC10'>	<span class="nx">$</span><span class="p">.</span><span class="nx">bootstrapSortable</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">applyLast</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC11'>		<span class="c1">// set attributes needed for sorting</span></div><div class='line' id='LC12'>		<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;table.sortable&#39;</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC13'>			<span class="kd">var</span> <span class="nx">$this</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC14'>			<span class="nx">applyLast</span> <span class="o">=</span> <span class="p">(</span><span class="nx">applyLast</span> <span class="o">===</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC15'>			<span class="nx">$this</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;span.arrow&#39;</span><span class="p">).</span><span class="nx">remove</span><span class="p">();</span></div><div class='line' id='LC16'>			<span class="nx">$this</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;thead th&#39;</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">index</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC17'>				<span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;data-sortkey&#39;</span><span class="p">,</span> <span class="nx">index</span><span class="p">);</span></div><div class='line' id='LC18'>			<span class="p">});</span></div><div class='line' id='LC19'>			<span class="nx">$this</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;th,td&#39;</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC20'>				<span class="kd">var</span> <span class="nx">$this</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC21'>				<span class="nx">$this</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;data-value&#39;</span><span class="p">)</span> <span class="o">===</span> <span class="kc">undefined</span> <span class="o">&amp;&amp;</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;data-value&#39;</span><span class="p">,</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">text</span><span class="p">());</span></div><div class='line' id='LC22'>			<span class="p">});</span></div><div class='line' id='LC23'>			<span class="nx">$this</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;thead th&#39;</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">index</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC24'>				<span class="kd">var</span> <span class="nx">$this</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC25'>				<span class="nx">lastSort</span> <span class="o">=</span> <span class="nx">applyLast</span> <span class="o">?</span> <span class="nx">lastSort</span> <span class="o">:</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC26'>				<span class="nx">bsSort</span><span class="p">[</span><span class="nx">index</span><span class="p">]</span> <span class="o">=</span> <span class="nx">applyLast</span> <span class="o">?</span> <span class="nx">bsSort</span><span class="p">[</span><span class="nx">index</span><span class="p">]</span> <span class="o">:</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;data-defaultsort&#39;</span><span class="p">);</span></div><div class='line' id='LC27'>				<span class="k">if</span> <span class="p">(</span><span class="nx">bsSort</span><span class="p">[</span><span class="nx">index</span><span class="p">]</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">applyLast</span> <span class="o">==</span> <span class="p">(</span><span class="nx">index</span> <span class="o">==</span> <span class="nx">lastSort</span><span class="p">)))</span> <span class="p">{</span></div><div class='line' id='LC28'>					<span class="nx">bsSort</span><span class="p">[</span><span class="nx">index</span><span class="p">]</span> <span class="o">=</span> <span class="nx">bsSort</span><span class="p">[</span><span class="nx">index</span><span class="p">]</span> <span class="o">==</span> <span class="s1">&#39;asc&#39;</span> <span class="o">?</span> <span class="s1">&#39;desc&#39;</span> <span class="o">:</span> <span class="s1">&#39;asc&#39;</span><span class="p">;</span></div><div class='line' id='LC29'>					<span class="nx">$this</span><span class="p">.</span><span class="nx">click</span><span class="p">();</span></div><div class='line' id='LC30'>				<span class="p">}</span></div><div class='line' id='LC31'>			<span class="p">});</span></div><div class='line' id='LC32'>		<span class="p">});</span></div><div class='line' id='LC33'>	<span class="p">};</span></div><div class='line' id='LC34'><br/></div><div class='line' id='LC35'>	<span class="c1">// add click event to table header</span></div><div class='line' id='LC36'>	<span class="nx">$document</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;click&#39;</span><span class="p">,</span> <span class="s1">&#39;table.sortable thead th&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC37'>		<span class="kd">var</span> <span class="nx">$this</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">),</span> <span class="nx">$table</span> <span class="o">=</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">parents</span><span class="p">(</span><span class="s1">&#39;table.sortable&#39;</span><span class="p">);</span></div><div class='line' id='LC38'><br/></div><div class='line' id='LC39'>		<span class="c1">// update arrow icon</span></div><div class='line' id='LC40'>		<span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">browser</span><span class="p">.</span><span class="nx">mozilla</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC41'>			<span class="kd">var</span> <span class="nx">moz_arrow</span> <span class="o">=</span> <span class="nx">$table</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;div.mozilla&#39;</span><span class="p">);</span></div><div class='line' id='LC42'>			<span class="k">if</span> <span class="p">(</span><span class="nx">moz_arrow</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC43'>				<span class="nx">moz_arrow</span><span class="p">.</span><span class="nx">parent</span><span class="p">().</span><span class="nx">html</span><span class="p">(</span><span class="nx">moz_arrow</span><span class="p">.</span><span class="nx">text</span><span class="p">());</span></div><div class='line' id='LC44'>			<span class="p">}</span></div><div class='line' id='LC45'>			<span class="nx">$this</span><span class="p">.</span><span class="nx">wrapInner</span><span class="p">(</span><span class="s1">&#39;&lt;div class=&quot;mozilla&quot;&gt;&lt;/div&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC46'>			<span class="nx">$this</span><span class="p">.</span><span class="nx">children</span><span class="p">().</span><span class="nx">eq</span><span class="p">(</span><span class="mi">0</span><span class="p">).</span><span class="nx">append</span><span class="p">(</span><span class="s1">&#39;&lt;span class=&quot;arrow&quot;&gt;&lt;/span&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC47'>		<span class="p">}</span></div><div class='line' id='LC48'>		<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC49'>			<span class="nx">$table</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;span.arrow&#39;</span><span class="p">).</span><span class="nx">remove</span><span class="p">();</span></div><div class='line' id='LC50'>			<span class="nx">$this</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="s1">&#39;&lt;span class=&quot;arrow&quot;&gt;&lt;/span&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC51'>		<span class="p">}</span></div><div class='line' id='LC52'><br/></div><div class='line' id='LC53'>		<span class="c1">// sort direction</span></div><div class='line' id='LC54'>		<span class="kd">var</span> <span class="nx">nr</span> <span class="o">=</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;data-sortkey&#39;</span><span class="p">);</span></div><div class='line' id='LC55'>		<span class="nx">lastSort</span> <span class="o">=</span> <span class="nx">nr</span><span class="p">;</span></div><div class='line' id='LC56'>		<span class="nx">bsSort</span><span class="p">[</span><span class="nx">nr</span><span class="p">]</span> <span class="o">=</span> <span class="nx">bsSort</span><span class="p">[</span><span class="nx">nr</span><span class="p">]</span> <span class="o">==</span> <span class="s1">&#39;asc&#39;</span> <span class="o">?</span> <span class="s1">&#39;desc&#39;</span> <span class="o">:</span> <span class="s1">&#39;asc&#39;</span><span class="p">;</span></div><div class='line' id='LC57'>		<span class="k">if</span> <span class="p">(</span><span class="nx">bsSort</span><span class="p">[</span><span class="nx">nr</span><span class="p">]</span> <span class="o">==</span> <span class="s1">&#39;desc&#39;</span><span class="p">)</span> <span class="p">{</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;span.arrow&#39;</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;up&#39;</span><span class="p">);</span> <span class="p">}</span></div><div class='line' id='LC58'><br/></div><div class='line' id='LC59'>		<span class="c1">// sort rows</span></div><div class='line' id='LC60'>		<span class="kd">var</span> <span class="nx">rows</span> <span class="o">=</span> <span class="nx">$table</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;tbody tr&#39;</span><span class="p">);</span></div><div class='line' id='LC61'>		<span class="nx">rows</span><span class="p">.</span><span class="nx">tsort</span><span class="p">(</span><span class="s1">&#39;td:eq(&#39;</span> <span class="o">+</span> <span class="nx">nr</span> <span class="o">+</span> <span class="s1">&#39;)&#39;</span><span class="p">,</span> <span class="p">{</span> <span class="nx">order</span><span class="o">:</span> <span class="nx">bsSort</span><span class="p">[</span><span class="nx">nr</span><span class="p">],</span> <span class="nx">attr</span><span class="o">:</span> <span class="s1">&#39;data-value&#39;</span> <span class="p">});</span></div><div class='line' id='LC62'>	<span class="p">});</span></div><div class='line' id='LC63'><br/></div><div class='line' id='LC64'>	<span class="c1">// jQuery 1.9 removed this object</span></div><div class='line' id='LC65'>	<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">$</span><span class="p">.</span><span class="nx">browser</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC66'>		<span class="nx">$</span><span class="p">.</span><span class="nx">browser</span> <span class="o">=</span> <span class="p">{</span> <span class="nx">chrome</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span> <span class="nx">mozilla</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span> <span class="nx">opera</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span> <span class="nx">msie</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span> <span class="nx">safari</span><span class="o">:</span> <span class="kc">false</span> <span class="p">};</span></div><div class='line' id='LC67'>		<span class="kd">var</span> <span class="nx">ua</span> <span class="o">=</span> <span class="nx">navigator</span><span class="p">.</span><span class="nx">userAgent</span><span class="p">;</span></div><div class='line' id='LC68'>		<span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">browser</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">c</span><span class="p">,</span> <span class="nx">a</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC69'>			<span class="nx">$</span><span class="p">.</span><span class="nx">browser</span><span class="p">[</span><span class="nx">c</span><span class="p">]</span> <span class="o">=</span> <span class="p">((</span><span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="nx">c</span><span class="p">,</span> <span class="s1">&#39;i&#39;</span><span class="p">).</span><span class="nx">test</span><span class="p">(</span><span class="nx">ua</span><span class="p">)))</span> <span class="o">?</span> <span class="kc">true</span> <span class="o">:</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC70'>			<span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">browser</span><span class="p">.</span><span class="nx">mozilla</span> <span class="o">&amp;&amp;</span> <span class="nx">c</span> <span class="o">==</span> <span class="s1">&#39;mozilla&#39;</span><span class="p">)</span> <span class="p">{</span> <span class="nx">$</span><span class="p">.</span><span class="nx">browser</span><span class="p">.</span><span class="nx">mozilla</span> <span class="o">=</span> <span class="p">((</span><span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s1">&#39;firefox&#39;</span><span class="p">,</span> <span class="s1">&#39;i&#39;</span><span class="p">).</span><span class="nx">test</span><span class="p">(</span><span class="nx">ua</span><span class="p">)))</span> <span class="o">?</span> <span class="kc">true</span> <span class="o">:</span> <span class="kc">false</span><span class="p">;</span> <span class="p">};</span></div><div class='line' id='LC71'>			<span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">browser</span><span class="p">.</span><span class="nx">chrome</span> <span class="o">&amp;&amp;</span> <span class="nx">c</span> <span class="o">==</span> <span class="s1">&#39;safari&#39;</span><span class="p">)</span> <span class="p">{</span> <span class="nx">$</span><span class="p">.</span><span class="nx">browser</span><span class="p">.</span><span class="nx">safari</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span> <span class="p">};</span></div><div class='line' id='LC72'>		<span class="p">});</span></div><div class='line' id='LC73'>	<span class="p">};</span></div><div class='line' id='LC74'><br/></div><div class='line' id='LC75'>	<span class="c1">// Initialise on DOM ready</span></div><div class='line' id='LC76'>	<span class="nx">$</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">bootstrapSortable</span><span class="p">);</span></div><div class='line' id='LC77'><br/></div><div class='line' id='LC78'><span class="p">}(</span><span class="nx">jQuery</span><span class="p">));</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;">
            <button type="submit" class="button">Go</button>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif" height="64" width="64">
</div>


        </div>
      </div>
      <div class="modal-backdrop"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="/about">About us</a></dd>
        <dd><a href="/blog">Blog</a></dd>
        <dd><a href="/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.10551s from fe17.rs.github.com">GitHub</span>, Inc. All rights reserved.</p>
    <a class="left" href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>
    <ul id="legal">
        <li><a href="/site/terms">Terms of Service</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/drvic10k/bootstrap-sortable/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

    
    <span id='server_response_time' data-time='0.10697' data-host='fe17'></span>
    
  </body>
</html>

