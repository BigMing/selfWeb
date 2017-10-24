$(document).ready(function ($) {
    // $.dialog({
    //     icon: 'fa fa-wrench',
    //     title: '抱歉啦！',
    //     content: '部分内容和链接还未部署好😭容老孙抽空慢慢搞😥'
    // });

    // 初始化技能条
    $('.level-bar-inner').css('width', '0');
    $('.level-bar-inner').each(function () {
        var itemWidth = $(this).data('level');
        $(this).animate({
            width: itemWidth
        }, 800);
    });

    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();

    /* jQuery RSS - https://github.com/sdepold/jquery-rss */
    // $("#rss-feeds").rss(
    //     //Change this to your own rss feeds
    //     "http://feeds.feedburner.com/TechCrunch/startups",
    //     {
    //         // how many entries do you want?
    //         // default: 4
    //         // valid values: any integer
    //         limit: 3,
    //
    //         // the effect, which is used to let the entries appear
    //         // default: 'show'
    //         // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
    //         effect: 'slideFastSynced',
    //
    //         // outer template for the html transformation
    //         // default: "<ul>{entries}</ul>"
    //         // valid values: any string
    //         layoutTemplate: "<div class='item'>{entries}</div>",
    //
    //         // inner template for each entry
    //         // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
    //         // valid values: any string
    //         entryTemplate: '<h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fa fa-external-link"></i>Read more</a></div>'
    //     }
    // );

    /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
    GitHubActivity.feed({
        username: "BigMing",
        selector: "#ghfeed"
        // repository: "your-repo", // optional,
        // limit: 10 // optional
    });
});