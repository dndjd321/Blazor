using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace MyBlazorApp.Components.Pages
{
    // === API 응답 모델 공통 클래스 ===
    public class YgoApiResponse
    {
        public List<YgoCard> Data { get; set; } = new();
    }

    public class YgoCard
    {
        public int Id { get; set; }
        public string Name { get; set; } = "";
        public string Type { get; set; } = "";

        [JsonPropertyName("card_images")]
        public List<YgoCardImage> CardImages { get; set; } = new();
    }

    public class YgoCardImage
    {
        [JsonPropertyName("image_url_small")]
        public string ImageUrlSmall { get; set; } = "";
    }
}