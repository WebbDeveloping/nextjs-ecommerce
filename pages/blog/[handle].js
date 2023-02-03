import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FooterNew from "../../components/LayoutComponents/FooterNew";
import InstagramSection from "../../components/LayoutComponents/InstagramSection";
import Navigation from "../../components/Navigation/Navigation";
import blogPosts from "../../data/blogPosts.json";

function Article({ article }) {
  const [blogPostsArr, setBlogPostsArr] = useState(blogPosts);

  React.useEffect(() => {
    if (blogPosts.length > 0) {
      setBlogPostsArr(blogPosts);
    }
  }, [blogPosts]);

  return (
    <div>
      <Navigation />
      <div
        id="Hero"
        data-w-id="ed172193-743c-fdc4-8436-d9a49065bcfb"
        className="section page-header wf-section"
      >
        <div className="wrapper">
          <div className="header-intro">
            <div className="post-category">
              <div className="title">Published in </div>
              <Link href={`/blog/${article.Category}`}>
                <div className="title link-title">{article.Category}</div>
              </Link>
            </div>
            <h1 className="post-page-heading">{article.Name}</h1>
            <div className="divider clear"></div>
          </div>
          <div className="breadcrumbs">
            <Link href="/">
              <div className="link-dark">Home</div>
            </Link>
            <Image
              src="/images/right.svg"
              width={13}
              height={13}
              alt=""
              className="breadcrumbs-divider"
            />
            <Link href="/blog">
              <div className="link-dark">Blog</div>
            </Link>
            <Image
              src="/images/right.svg"
              width={13}
              height={13}
              alt=""
              className="breadcrumbs-divider"
            />
            <Link href={article["Slug"]}>
              <div className="link-dark">{article.Name}</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="section wf-section">
        <div className="wrapper">
          <div
            className="post-image"
            style={{
              backgroundImage: `url(${article["Full-Size-Image"]})`,
            }}
          ></div>
          <div className="post-content-wrapper">
            <div className="post-info">
              <div className="post-date-block">
                <div className="post-card-date">16</div>
                <div className="post-card-month">Jun 2022</div>
              </div>
              <div className="share-buttons">
                <div className="share-text">
                  Share
                  <br />
                  this Post
                </div>
                <Link
                  href="https://www.instagram.com/3sistersboutiquepnw/"
                  target="_blank"
                  className="share-button w-inline-block"
                >
                  <Image
                    src="/images/instagram-color.svg"
                    width={24}
                    height={24}
                    alt=""
                    className="full-width"
                  />
                </Link>
                <Link
                  href="https://www.facebook.com/threesisterspnw/"
                  target="_blank"
                  className="share-button w-inline-block"
                >
                  <Image
                    src="/images/facebook-color.svg"
                    width={24}
                    height={24}
                    alt=""
                    className="full-width"
                  />
                </Link>
                <Link
                  href="https://pinterest.com/"
                  target="_blank"
                  className="share-button w-inline-block"
                >
                  <Image
                    src="/images/pinterest-color.svg"
                    width={24}
                    height={24}
                    alt=""
                    className="full-width"
                  />
                </Link>
              </div>
            </div>
            <div className="post-content">
              <div
                className="post w-richtext"
                dangerouslySetInnerHTML={{ __html: article.Content }}
              ></div>
              <div className="post-tags-wrapper">
                <h6 className="post-tags-heading">Tags:</h6>
                <div className="w-dyn-list">
                  <div role="list" className="post-tags w-dyn-items">
                    {blogPostsArr.length > 1 ? (
                      blogPostsArr.map((post, id) => {
                        <div key={id} role="listitem" className="w-dyn-item">
                          <Link href="#" className="tag w-inline-block">
                            <div>{post.Tags}</div>
                          </Link>
                        </div>;
                      })
                    ) : (
                      <div className="w-dyn-empty">
                        <div>No items found.</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-sidebar">
              <div className="sidebar-block">
                <h4 className="sidebar-heading">Categories</h4>
                <div className="w-dyn-list">
                  <div role="list" className="w-dyn-items">
                    {blogPostsArr.length > 1 ? (
                      blogPostsArr.map((post, id) => {
                        return (
                          <div key={id} role="listitem" className="w-dyn-item">
                            <Link href={`/blog/${post["Category"]}`}>
                              <div className="sidebar-category">
                                {post["Category"]}
                              </div>
                            </Link>
                          </div>
                        );
                      })
                    ) : (
                      <div className="w-dyn-empty">
                        <div>No items found.</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="sidebar-block">
                <h4 className="sidebar-heading">Featured Posts</h4>
                <div className="w-dyn-list">
                  <div role="list" className="w-dyn-items">
                    {blogPosts.length > 1 ? (
                      blogPosts.map((post, id) => {
                        return (
                          <div key={id} role="listitem" className="w-dyn-item">
                            <Link href="#">
                              <div className="sidebar-featured-post w-inline-block">
                                <div
                                  className="sidebar-post-image"
                                  style={{
                                    backgroundImage: `url(${post["Thumbnail"]})`,
                                  }}
                                ></div>
                                <div className="sidebar-post-info">
                                  <div className="sidebar-post-date"></div>
                                  <div className="sidebar-post-heading">
                                    {post["Name"]}
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        );
                      })
                    ) : (
                      <div className="w-dyn-empty">
                        <div>No items found.</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="sidebar-block">
                <h4 className="sidebar-heading">
                  Join Our Mailing List &amp; Get{" "}
                  <span className="text-color">10% Discount</span>
                </h4>
                <div className="full-width w-form">
                  <form
                    id="wf-form-Sidebar-Subscribe-Form"
                    name="wf-form-Sidebar-Subscribe-Form"
                    data-name="Sidebar Subscribe Form"
                    method="get"
                    className="sidebar-subscribe-form"
                  >
                    <div className="full-width-input-wrapper">
                      <Image
                        src="/images/at-sign.svg"
                        width={24}
                        height={24}
                        alt=""
                        className="input-icon"
                      />
                      <input
                        type="email"
                        className="input icon-input w-input"
                        maxLength="256"
                        name="Sidebar-Subscribe"
                        data-name="Sidebar Subscribe"
                        placeholder="Email address"
                        id="Sidebar-Subscribe"
                        required=""
                      />
                    </div>
                    <input
                      type="submit"
                      value="Subscribe"
                      data-wait="Please wait..."
                      className="button w-button"
                    />
                    <div className="form-text-small">
                      We never share your info. View our{" "}
                      <Link href="/faq">
                        <a className="link-dark">Privacy Policy</a>
                      </Link>
                    </div>
                  </form>
                  <div className="default-message text-left w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div className="error-message w-form-fail">
                    <div>
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div>
                </div>
              </div>
              <div className="sidebar-block sticky">
                <Link
                  data-w-id="0678a845-24d6-9d2a-35e1-5a4d957f8b22"
                  href="/Shop"
                >
                  <div className="banner w-inline-block">
                    <div className="banner-header">
                      <div className="title small-title">
                        <span className="text-color">New</span> Arrivals
                      </div>
                      <h5>Explore Our Shop</h5>
                    </div>
                    <div className="banner-image-wrapper">
                      <Image
                        src="/images/5.png"
                        width="260px"
                        height="350px"
                        alt=""
                        className="banner-image"
                      />
                      <div
                        style={{
                          WebkitTransform:
                            "translate3d(0, 0, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          MozTransform:
                            "translate3d(0, 0, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          MsTransform:
                            "translate3d(0, 0, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          transform:
                            "translate3d(0, 0, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          opacity: "0",
                        }}
                        className="button banner-button"
                      >
                        <div className="button-icon-wrapper w-clearfix">
                          <Image
                            src="/images/cart.svg"
                            width={24}
                            height={24}
                            alt=""
                            className="button-icon left"
                          />
                        </div>
                        <div>Shop Now</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section no-padding-top wf-section">
        <div className="wrapper">
          <div className="intro">
            <div className="title">
              <span className="text-color">Explore</span> Other Posts
            </div>
            <h3>You Might Also Like</h3>
            <div className="divider"></div>
          </div>
          <div className="full-width w-dyn-list">
            <div role="list" className="posts w-dyn-items">
              {blogPosts.length > 1 ? (
                blogPosts.map((post, id) => {
                  return (
                    <div
                      key={id}
                      role="listitem"
                      className="post-item w-dyn-item"
                    >
                      <div className="post-card">
                        <div className="post-card-preview w-inline-block">
                          <div
                            className="zoomed-image"
                            style={{
                              backgroundImage: `url(${post["Full-Size-Image"]})`,
                            }}
                          ></div>
                        </div>
                        <div className="post-card-content">
                          <div className="post-card-date-block">
                            <div className="post-card-date">20</div>
                            <div className="post-card-month">May 2022</div>
                          </div>
                          <div className="post-card-info">
                            <div className="post-card-category">
                              <div>Published in </div>
                              <Link href={`/blog/category/${post["Category"]}`}>
                                <div className="link-color">
                                  {post["Category"]}
                                </div>
                              </Link>
                            </div>
                            <Link href={`/blog/${post["Slug"]}`}>
                              <div className="link-dark w-inline-block">
                                <h4 className="post-card-heading">
                                  {post["Name"]}
                                </h4>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="w-dyn-empty">
                  <div>No items found.</div>
                </div>
              )}
            </div>
          </div>
          <div className="flex-center">
            <Link href="/blog">
              <div className="button ghost w-inline-block">
                <div>See All Posts</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <InstagramSection />
      <FooterNew />
    </div>
  );
}

export default Article;

export async function getStaticPaths() {
  // Get all the product handles
  const articleHandles = blogPosts.map((article) => article["Slug"]);

  // Return the paths to all the article pages
  return {
    paths: articleHandles.map((handle) => ({ params: { handle } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Find the article with the matching handle
  const article = blogPosts.find((article) => {
    return article["Slug"] === params.handle;
  });

  // Return the article data as props
  return {
    props: {
      article,
    },
  };
}
