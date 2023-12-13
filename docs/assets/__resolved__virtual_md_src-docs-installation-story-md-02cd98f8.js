const html = "<h1 id=\"installation\" tabindex=\"-1\">Installation <a class=\"header-anchor\" href=\"#installation\" aria-hidden=\"true\">#</a></h1>\n<h2 id=\"requirements\" tabindex=\"-1\">Requirements <a class=\"header-anchor\" href=\"#requirements\" aria-hidden=\"true\">#</a></h2>\n<p>Your main project should have the following dependencies installed:</p>\n<div class=\"div data-table\"><table>\n<thead>\n<tr>\n<th style=\"text-align:left\">Package</th>\n<th style=\"text-align:center\">Minimum Version</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style=\"text-align:left\">Vue 3</td>\n<td style=\"text-align:center\">^3.3.4</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Vuetify</td>\n<td style=\"text-align:center\">^3.3.7</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Axios</td>\n<td style=\"text-align:center\">^1.4.0</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Cross-env</td>\n<td style=\"text-align:center\">^7.0</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Maska</td>\n<td style=\"text-align:center\">^2.1.10</td>\n</tr>\n<tr>\n<td style=\"text-align:left\">Moment Timezone</td>\n<td style=\"text-align:center\">^0.5.33</td>\n</tr>\n</tbody>\n</table>\n</div>\n<h2 id=\"npm-install\" tabindex=\"-1\">NPM Install <a class=\"header-anchor\" href=\"#npm-install\" aria-hidden=\"true\">#</a></h2>\n<p>Install NPM Package:</p>\n<pre><code class=\"language-shell\"><div class=\"htw-relative htw-not-prose __histoire-code\"><div class=\"htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40\">shell</div><pre class=\"shiki github-dark\" style=\"background-color: #0d1117\"><code><span class=\"line\"><span style=\"color: #FFA657\">npm</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #A5D6FF\">install</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #A5D6FF\">laravel-vue-easyforms</span></span>\n<span class=\"line\"></span></code></pre></div></code></pre>\n<h2 id=\"configuration\" tabindex=\"-1\">Configuration <a class=\"header-anchor\" href=\"#configuration\" aria-hidden=\"true\">#</a></h2>\n<p>You need to load this plugin when you initialise your Vue instance:</p>\n<pre><code class=\"language-typescript\"><div class=\"htw-relative htw-not-prose __histoire-code\"><div class=\"htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40\">typescript</div><pre class=\"shiki github-dark\" style=\"background-color: #0d1117\"><code><span class=\"line\"><span style=\"color: #FF7B72\">import</span><span style=\"color: #C9D1D9\"> FormLoaderPlugin </span><span style=\"color: #FF7B72\">from</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #A5D6FF\">&quot;laravel-vue-easyforms&quot;</span><span style=\"color: #C9D1D9\">;</span></span>\n<span class=\"line\"><span style=\"color: #FF7B72\">import</span><span style=\"color: #C9D1D9\"> { createApp } </span><span style=\"color: #FF7B72\">from</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #A5D6FF\">&quot;vue&quot;</span><span style=\"color: #C9D1D9\">;</span></span>\n<span class=\"line\"><span style=\"color: #FF7B72\">import</span><span style=\"color: #C9D1D9\"> App </span><span style=\"color: #FF7B72\">from</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #A5D6FF\">&quot;./App.vue&quot;</span><span style=\"color: #C9D1D9\">;</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #D2A8FF\">createApp</span><span style=\"color: #C9D1D9\">(App)</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  .</span><span style=\"color: #D2A8FF\">use</span><span style=\"color: #C9D1D9\">(FormLoaderPlugin, {</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    backend_domain: </span><span style=\"color: #A5D6FF\">&quot;localhost&quot;</span><span style=\"color: #C9D1D9\">,</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    axios_prefix: </span><span style=\"color: #A5D6FF\">&quot;/api/1.0&quot;</span><span style=\"color: #C9D1D9\">,</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    csrf_endpoint: </span><span style=\"color: #A5D6FF\">&quot;/sanctum/csrf-cookie&quot;</span><span style=\"color: #C9D1D9\">,</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    uses_vue_router: </span><span style=\"color: #79C0FF\">false</span><span style=\"color: #C9D1D9\">,</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    required_tags_only: </span><span style=\"color: #79C0FF\">false</span><span style=\"color: #C9D1D9\">,</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    tags_on_placeholder: </span><span style=\"color: #79C0FF\">true</span><span style=\"color: #C9D1D9\">,</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">    tags_on_labels: </span><span style=\"color: #79C0FF\">false</span><span style=\"color: #C9D1D9\">,</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  })</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">  .</span><span style=\"color: #D2A8FF\">mount</span><span style=\"color: #C9D1D9\">(</span><span style=\"color: #A5D6FF\">&quot;#app&quot;</span><span style=\"color: #C9D1D9\">);</span></span>\n<span class=\"line\"></span></code></pre></div></code></pre>\n<p>The plugin has the following <code>PluginOptions</code> object with the below defaults:</p>\n<pre><code class=\"language-typescript\"><div class=\"htw-relative htw-not-prose __histoire-code\"><div class=\"htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40\">typescript</div><pre class=\"shiki github-dark\" style=\"background-color: #0d1117\"><code><span class=\"line\"><span style=\"color: #8B949E\">/**</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\"> * Backend domain for making API calls.</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\"> * It should end without a forward slash.</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\"> * eg. https://domain.com</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\"> */</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">backend_domain </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #A5D6FF\">&quot;&quot;</span><span style=\"color: #C9D1D9\">;</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\">/**</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\"> * The prefix for making calls via API, this is append to the backend domain.</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\"> * It should begin with a forward slash and end without a forward slash.</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\"> * This should match laravel.</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\"> * eg. /api/v1.0/</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\"> */</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">axios_prefix </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #A5D6FF\">&quot;&quot;</span><span style=\"color: #C9D1D9\">;</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\">/**</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\"> * If CSRF checks are required then this should be the endpoint.</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\"> * It should begin with a forward slash and end without a forward slash.</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\"> * eg. /security/cookie</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\"> */</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">csrf_endpoint </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #A5D6FF\">&quot;&quot;</span><span style=\"color: #C9D1D9\">;</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\">/**</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\"> * Does your frontend application use vue router.</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\"> */</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">uses_vue_router </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #79C0FF\">false</span><span style=\"color: #C9D1D9\">;</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\">/**</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\"> * When initiated, if placeholder is present and empty,</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\"> * and text is present and not empty, placeholder should = text</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\"> */</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">text_to_placeholder </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #79C0FF\">true</span><span style=\"color: #C9D1D9\">;</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\">/**</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\"> * Display required tags only, either tags_on_placeholder or tags_on_labels</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\"> * must be set to true for this to take effect.</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\"> */</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">required_tags_only </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #79C0FF\">true</span><span style=\"color: #C9D1D9\">;</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\">/**</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\"> * Should the placeholder text display required and optional tags</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\"> */</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">tags_on_placeholder </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #79C0FF\">true</span><span style=\"color: #C9D1D9\">;</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\">/**</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\"> * Should the label text display required and optional tags</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\"> */</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">tags_on_labels </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #79C0FF\">false</span><span style=\"color: #C9D1D9\">;</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\">/**</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\"> * Optional placeholder text to append placeholder attribute</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\"> */</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">optional_placeholder_text </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #A5D6FF\">&quot; ( * Optional )&quot;</span><span style=\"color: #C9D1D9\">;</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\">/**</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\"> * Optional label text to append placeholder attribute</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\"> */</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">optional_label_text </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #A5D6FF\">&quot; ( * Optional )&quot;</span><span style=\"color: #C9D1D9\">;</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\">/**</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\"> * Required placeholder text to append placeholder attribute</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\"> */</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">required_placeholder_text </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #A5D6FF\">&quot; ( * Required )&quot;</span><span style=\"color: #C9D1D9\">;</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\">/**</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\"> * Required label text to append placeholder attribute</span></span>\n<span class=\"line\"><span style=\"color: #8B949E\"> */</span></span>\n<span class=\"line\"><span style=\"color: #C9D1D9\">required_label_text </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #A5D6FF\">&quot; ( * Required )&quot;</span><span style=\"color: #C9D1D9\">;</span></span>\n<span class=\"line\"></span></code></pre></div></code></pre>\n<h2 id=\"configuring-csrf\" tabindex=\"-1\">Configuring CSRF <a class=\"header-anchor\" href=\"#configuring-csrf\" aria-hidden=\"true\">#</a></h2>\n<p>The CSRF system is based off <a href=\"https://laravel.com/docs/10.x/sanctum#spa-authenticating\" target=\"_blank\">Laravel Sanctum</a> so it will make a call to a specific URL to request the <code>XSRF-TOKEN</code></p>\n<p>You should also make sure your main project sets axios defaults:</p>\n<pre><code class=\"language-js\"><div class=\"htw-relative htw-not-prose __histoire-code\"><div class=\"htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40\">js</div><pre class=\"shiki github-dark\" style=\"background-color: #0d1117\"><code><span class=\"line\"><span style=\"color: #C9D1D9\">axios.defaults.withCredentials </span><span style=\"color: #FF7B72\">=</span><span style=\"color: #C9D1D9\"> </span><span style=\"color: #79C0FF\">true</span><span style=\"color: #C9D1D9\">;</span></span>\n<span class=\"line\"></span></code></pre></div></code></pre>\n<h2 id=\"vue-components\" tabindex=\"-1\">Vue Components <a class=\"header-anchor\" href=\"#vue-components\" aria-hidden=\"true\">#</a></h2>\n<p>You are now ready to start using the form loader component.</p>\n<pre><code class=\"language-html\"><div class=\"htw-relative htw-not-prose __histoire-code\"><div class=\"htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40\">html</div><pre class=\"shiki github-dark\" style=\"background-color: #0d1117\"><code><span class=\"line\"><span style=\"color: #C9D1D9\">&lt;</span><span style=\"color: #7EE787\">form-loader</span><span style=\"color: #C9D1D9\"> /&gt;</span></span>\n<span class=\"line\"></span></code></pre></div></code></pre>\n";
const frontmatter = {"group":"getting-started","icon":"carbon:bookmark","title":"Installation"};
const relativePath = "src/docs/Installation.story.md";

export { frontmatter, html, relativePath };
